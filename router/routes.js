const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World !')
});

const categoryRoutes = require('./categories-routes');
const transactionRoutes = require('./transactions-routes');
const keywordRoutes = require('./keywords-routes');
const budgetRoutes = require('./monthly-budget-routes');

router.use('/categories', categoryRoutes);
router.use('/transactions', transactionRoutes);
router.use('/keywords', keywordRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;
