const express = require('express');
const app = express();

const router = require('./router/routes');
app.use('/', router);

module.exports = app;
