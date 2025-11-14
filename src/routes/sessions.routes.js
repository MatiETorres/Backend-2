const express = require('express');
const passport = require('passport');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions.controller');

// Register
router.post('/register', sessionsCtrl.register);

// Login - passport local
router.post('/login',
  passport.authenticate('login', { session: false, failWithError: true }),
  sessionsCtrl.login
);

// Current - valida token y devuelve datos del usuario
router.get('/current',
  passport.authenticate('jwt', { session: false }),
  sessionsCtrl.current
);

module.exports = router;
