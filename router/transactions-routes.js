const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req, res) => {
    db.query(`
        SELECT t.*, c.name as category_name, c.is_income
        FROM transactions t
        LEFT JOIN categories c on t.category_id = c.id
        ORDER BY date DESC
        `, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query(`
        SELECT t.*, c.name as category_name, c.is_income
        FROM transactions t
        LEFT JOIN categories c on t.category_id = c.id
        WHERE id = ?
        `, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        res.json(results[0]);
    });
});

router.get('/category/:id', (req, res) => {
    const { id } = req.params;
    db.query(`
        SELECT t.*, c.is_income
        FROM transactions t
        LEFT JOIN categories c on t.category_id = c.id
        WHERE t.category_id = ? 
        ORDER BY date DESC
        `, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { amount, description, category, date } = req.body;
    db.query('INSERT INTO transactions (amount, description, category_id, date) VALUES (?, ?, ?, ?)', [amount, description, category, date], (err, results) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    const { amount, description, category, date } = req.body;
    const { id } = req.params;
    db.query('UPDATE transactions SET amount = ?, description = ?, category_id = ?, date = ? WHERE id = ?', [amount, description, category, date, id], (err, results) => {

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

router.delete('/category/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM transactions WHERE category_id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;