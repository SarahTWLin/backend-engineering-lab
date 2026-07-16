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

async function getTaskById(taskId) {
    const tasks = await getTaskList();
    return tasks.find((task) => task.id === taskId);
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