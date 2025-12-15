
import { Router } from 'express';
import { register, login, current } from '../controllers/sessions.controller.js';
import { auth } from '../middlewares/auth.js';

const r = Router();
r.post('/register', register);
r.post('/login', login);
r.get('/current', auth, current);
export default r;
