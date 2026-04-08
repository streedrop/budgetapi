const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM budget', (err, results) => {

    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const { id: category_id } = req.params;
  db.query('SELECT * FROM budget WHERE category_id = ?', [category_id], (err, results) => {

    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
});

router.get('/:id/:month', (req, res) => {
  const { id: category_id, month } = req.params;
  const fullDate = `${month}-01`; 
  db.query('SELECT * FROM budget WHERE category_id = ? AND month = ?', [category_id, fullDate], (err, results) => {

    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) return res.status(404).json({ error: "Monthly budget entry not found" });

    res.json(results[0]);
  });
});

router.put('/:id/:month', (req, res) => {
  const { amount } = req.body;
  const { id: category_id, month } = req.params;
  const fullDate = `${month}-01`; 
  db.query(`
    INSERT INTO budget (category_id, month, amount) VALUES 
    (?, ?, ?)
    ON DUPLICATE KEY UPDATE amount = VALUES(amount)
    `, [category_id, fullDate, amount], (err, results) => {

    if (err) return res.status(500).json({ error: err.message });

    if (results.affectedRows === 0) return res.status(404).json({ error: "Budget entry not found" });

    res.json(results);
  });
});

router.delete('/:id/:month', (req, res) => {
  const { id: category_id, month } = req.params;
  const fullDate = `${month}-01`; 
  db.query('DELETE FROM budget WHERE category_id = ? AND month = ?', [category_id, fullDate], (err, results) => {

    if (err) return res.status(500).json({ error: err.message });

    if (results.affectedRows === 0) return res.status(404).json({ error: "Budget entry not found" });

    res.json(results);
  });
});

module.exports = router;