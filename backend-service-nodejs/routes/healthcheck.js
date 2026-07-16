const express = require('express');
const healthcheckRouter = express.Router();

const { getApiHealth, getDatabaseHealth } = require('../controllers/healthcheck');

healthcheckRouter.get('/api', getApiHealth);
healthcheckRouter.get('/db', getDatabaseHealth);

module.exports = [
    healthcheckRouter
]