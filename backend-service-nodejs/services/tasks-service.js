const prisma = require('../prisma/prisma');

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


module.exports = 
{ 
    getTaskList,
    getTaskById,
    createTask
}