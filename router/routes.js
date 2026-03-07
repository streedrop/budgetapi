const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World !')
});

const categoryRoutes = require('./categories-routes');
const transactionRoutes = require('./transactions-routes');
const keywordRoutes = require('./keywords-routes');

router.use('/categories', categoryRoutes);
router.use('/transactions', transactionRoutes);
router.use('/keywords', keywordRoutes);


module.exports = router;
