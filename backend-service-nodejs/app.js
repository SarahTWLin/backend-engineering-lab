const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Routes
const taskRouter = require("./routes/tasks");

app.get("/healthcheck", (req, res) => {
    res.status(200).send({
        status: "OK"
    })
});

app.use("/tasks/v1/", taskRouter);

module.exports = app;