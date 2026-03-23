const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  const all = `
    SELECT c.*, COUNT(t.id) as count
    FROM categories as c 
    LEFT JOIN transactions as t ON c.id = t.category_id
    GROUP BY c.id
  `
  const uncategorized = `
    SELECT NULL as id, 'Uncategorized' as name, NULL as description, NULL as is_income, 0 as icon,
    COUNT(*) FROM
    (SELECT id FROM transactions WHERE category_id IS NULL)
    as count
  `
  db.query(`${all} UNION ALL ${uncategorized}`, (err, results) => {
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
  const { name, description, is_income, icon } = req.body;
  db.query('INSERT INTO categories (name, description, is_income, icon) VALUES (?, ?, ?, ?)', [name, description, is_income, icon], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  const { name, description, is_income, icon } = req.body;
  const { id } = req.params;
  db.query('UPDATE categories SET name = ?, description = ?, is_income = ?, icon = ? WHERE id = ?', [name, description, is_income, icon, id], (err, results) => {

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