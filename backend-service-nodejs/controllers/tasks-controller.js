const prisma = require('../prisma/prisma');

// To refine: database connection
const sampleData = [
    {
        "id": 1,
        "title": "Task1",
        "description": "First task",
        "status": "todo"
    },
    {
        "id": 2,
        "title": "Task2",
        "description": "Second task",
        "status": "in-progress"
    }
]

async function getTaskList() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

function getTaskById(taskId) {
    const task = getTaskList().find((task) => task.id === taskId);
    
    return task;
}

function createTask(task) {
    sampleData.push(
        task
    );
}


module.exports = 
{ 
    getTaskList,
    getTaskById,
    createTask
}