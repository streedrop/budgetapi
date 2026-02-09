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

module.exports = router;
