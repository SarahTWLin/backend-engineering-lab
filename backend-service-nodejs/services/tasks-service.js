const prisma = require('../prisma/prisma');
const { NotFoundError } = require('../utils/errors');

async function getTaskList() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

async function getTaskById(taskId) {
    
    const task = await prisma.task.findUnique({
        where: {
            id: parseInt(taskId)
        }
    });

    if (!task) {
        throw new NotFoundError("Task not found");
    }

    return task;
}

async function createTask(task) {
    const result = await prisma.task.create({
        data: {
            ...task
        }
    });
    
    return result;
}

async function deleteTask(taskId) {
    const results = await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    });

    return results;
}


module.exports = 
{ 
    getTaskList,
    getTaskById,
    createTask,
    deleteTask
}