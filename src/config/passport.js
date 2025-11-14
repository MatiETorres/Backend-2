const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

module.exports = function(passportInstance) {
  // Local strategy (email + password)
  passportInstance.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Usuario no encontrado' });

      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) return done(null, false, { message: 'Contraseña inválida' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));

  // JWT strategy: named 'jwt'
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
    passReqToCallback: false
  };

  passportInstance.use('jwt', new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await User.findById(payload.id).select('-password');
      if (!user) return done(null, false, { message: 'Token inválido: usuario no existe' });
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }));
};
