const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Routes
const taskRouter = require("./routes/tasks");
const healthcheckRouter = require("./routes/healthcheck");

app.use(express.json());
app.use(`/tasks/${process.env.VERSION}/`, taskRouter);
app.use(`/healthcheck/${process.env.VERSION}/`, healthcheckRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;