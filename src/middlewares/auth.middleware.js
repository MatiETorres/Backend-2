const passport = require('passport');

exports.jwtAuth = passport.authenticate('jwt', { session: false });
