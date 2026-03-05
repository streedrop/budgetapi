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

    if (results.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { name, description, is_income } = req.body;
  db.query('INSERT INTO categories (name, description, is_income) VALUES (?, ?, ?)', [name, description, is_income], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  const { name, description, is_income } = req.body;
  const { id } = req.params;
  db.query('UPDATE categories SET name = ?, description = ?, is_income = ? WHERE id = ?', [name, description, is_income, id], (err, results) => {

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