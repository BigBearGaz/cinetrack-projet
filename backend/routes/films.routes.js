const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET tous les films
router.get('/', async (req, res) => {
  try {
    const { category_id } = req.query;
    
    let query = `
      SELECT 
        f.id, f.title, f.release_year, f.duration,
        f.poster_url, f.synopsis, f.director,
        c.name as category_name
      FROM films f
      INNER JOIN categories c ON f.category_id = c.id
    `;
    
    const params = [];
    
    if (category_id) {
      query += ' WHERE f.category_id = ?';
      params.push(category_id);
    }
    
    query += ' ORDER BY f.title';
    
    const [films] = await db.query(query, params);
    res.json(films);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;