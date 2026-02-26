const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM transactions WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/', (req, res) => {
    const { amount, description, category_id } = req.body;
    db.query('INSERT INTO transactions (amount, description, category_id) VALUES (?, ?, ?)', [amount, description, category_id], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
    const { amount, description, category_id } = req.body;
    const { id } = req.params;
    db.query('UPDATE transactions SET amount = ?, description = ?, category_id = ? WHERE id = ?', [amount, description, category_id, id], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM transactions WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;