const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
  res.send('Hello World !')
});

router.get('/transactions', (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.post('/transactions', (req, res) => {
  console.log(req.body);
    const { amount, description } = req.body;
    db.query('INSERT INTO transactions (amount, description) VALUES (?, ?)', [amount, description], (err, results) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
