const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM rules', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { source, match_type, keyword, action, category_id, new_string } = req.body;
  db.query('INSERT INTO rules (source, match_type, keyword, action, category_id, new_string) VALUES (?, ?, ?, ?, ?, ?)', [source, match_type, keyword, action, category_id, new_string], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM rules WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;