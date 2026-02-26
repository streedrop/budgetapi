const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World !')
});

const transactionRoutes = require('./transactions-routes');

router.use('/transactions', transactionRoutes);


module.exports = router;
