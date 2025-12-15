
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import './config/passport.js';
import sessionRoutes from './routes/sessions.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI);
app.use('/api/sessions', sessionRoutes);

app.listen(process.env.PORT, () =>
  console.log('Servidor activo en puerto', process.env.PORT)
);
