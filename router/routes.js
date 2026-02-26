const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World !')
});

const categoryRoutes = require('./categories-routes');
const transactionRoutes = require('./transactions-routes');

router.use('/categories', categoryRoutes);
router.use('/transactions', transactionRoutes);


module.exports = router;
