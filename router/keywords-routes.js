const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM keywords', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { source, match_type, keyword, action, category_id } = req.body;
  db.query('INSERT INTO keywords (source, match_type, keyword, action, category_id) VALUES (?, ?, ?, ?, ?)', [source, match_type, keyword, action, category_id], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.delete('/:source/:keyword', (req, res) => {
  const { source, keyword } = req.params;
  db.query('DELETE FROM keywords WHERE source = ? AND keyword = ?', [source, keyword], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;