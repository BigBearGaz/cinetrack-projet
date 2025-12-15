const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API CineTrack fonctionne !' });
});

// Import des routes (à venir)
// const filmsRoutes = require('./routes/films');
// const categoriesRoutes = require('./routes/categories');
// const userFilmsRoutes = require('./routes/userFilms');

// Routes (à décommenter plus tard)
// app.use('/api/films', filmsRoutes);
// app.use('/api/categories', categoriesRoutes);
// app.use('/api/user-films', userFilmsRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});