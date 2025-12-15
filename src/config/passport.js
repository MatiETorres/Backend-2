
import passport from 'passport';
import jwt from 'passport-jwt';
import User from '../models/User.js';

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

passport.use('current', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}, async (payload, done)=>{
  const user = await User.findById(payload.id);
  return done(null, user);
}));
