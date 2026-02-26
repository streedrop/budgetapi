const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
    const { name, description } = req.body;
    db.query('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    db.query('UPDATE categories SET name = ?, description = ? WHERE id = ?', [name, description, id], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM categories WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;