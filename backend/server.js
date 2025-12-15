const express = require('express');
const cors = require('cors');

const filmsRoutes = require('./routes/films.routes');
const categoriesRoutes = require('./routes/categories.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

// Routes
app.use('/api/films', filmsRoutes);
app.use('/api/categories', categoriesRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
