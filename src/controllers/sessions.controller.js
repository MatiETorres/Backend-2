const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const SALT_ROUNDS = 10;

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: 'Email ya registrado' });

    const hashed = bcrypt.hashSync(password, SALT_ROUNDS);

    const user = new User({
      first_name, last_name, email, age,
      password: hashed
    });

    await user.save();

    const userSafe = user.toObject();
    delete userSafe.password;

    return res.status(201).json({ message: 'Usuario creado', user: userSafe });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = req.user;
    const payload = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return res.json({ message: 'Login OK', token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (err) {
    next(err);
  }
};

exports.current = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'No autorizado' });

  const user = req.user.toObject ? req.user.toObject() : req.user;
  delete user.password;

  return res.json({ user });
};
