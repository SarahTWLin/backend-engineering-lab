const express = require("express");
const taskRouter = express.Router();

const { getTaskList, getTask, createTask } = require("../controllers/tasks");

taskRouter.get('/', getTaskList);
taskRouter.get("/:id", getTask);
taskRouter.post("/", createTask);

module.exports = [
    taskRouter,
];