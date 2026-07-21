const logger = require('../config/logger');
const prisma = require('../prisma/prisma');
const { NotFoundError, BadRequestError } = require('../utils/errors');

async function getTaskList() {
    const tasks = await prisma.task.findMany();

    logger.info("getTaskById(): Return task lists");
    return tasks;
}

async function getTaskById(taskId) {

    if (parseInt(taskId) <= 0) {
        throw new BadRequestError("Invalid task ID");
    }
    
    const task = await prisma.task.findUnique({
        where: {
            id: parseInt(taskId)
        }
    });

    if (!task) {
        throw new NotFoundError("Task not found");
    }

    logger.info("getTaskById(): Return task");

    return task;
}

async function createTask(task) {

    if (task.completed !== false || task.completed !== true) {
        throw new BadRequestError("Invalid task status; completed must be true or false");
    }

    const result = await prisma.task.create({
        data: {
            ...task
        }
    });

    logger.info("createTask(): Task created");
    
    return result;
}

async function deleteTask(taskId) {

    if (parseInt(taskId) <= 0) {
        throw new BadRequestError("Invalid task ID");
    }

    const results = await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    });

    logger.info("deleteTask(): Task deleted");

    return results;
}


module.exports = 
{ 
    getTaskList,
    getTaskById,
    createTask,
    deleteTask
}