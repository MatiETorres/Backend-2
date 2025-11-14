require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const sessionsRoutes = require('./routes/sessions.routes');
const passportConfig = require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Inicializar passport
app.use(passport.initialize());
passportConfig(passport);

// Rutas
app.use('/api/sessions', sessionsRoutes);

app.get('/', (req, res) => res.send('API funcionando'));

// Conexión a Mongo
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo conectado');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Error conectando a Mongo', err);
    process.exit(1);
  });
