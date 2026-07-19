const express = require('express');
const healthcheckRouter = express.Router();

const { getApiHealth, getDatabaseHealth } = require('../controllers/healthcheck');

/**
 * @swagger
 * /healthcheck/v1/api:
 *   get:
 *     summary: Get API health
 *     tags:
 *       - Healthcheck
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks
 *         content:
 *           application/json:
 *             schema:   
 *               type: object 
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK 
 * 
 */
healthcheckRouter.get('/api', getApiHealth);

/**
 * @swagger
 * /healthcheck/v1/db:
 *   get:
 *     summary: Get DB health
 *     tags:
 *       - Healthcheck
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks
 */
healthcheckRouter.get('/db', getDatabaseHealth);

module.exports = healthcheckRouter;