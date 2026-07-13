const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Routes
const taskRouter = require("./routes/tasks");
const healthcheckRouter = require("./routes/healthcheck");

app.use("/tasks/v1/", taskRouter);
app.use("/healthcheck/v1/", healthcheckRouter);

module.exports = app;