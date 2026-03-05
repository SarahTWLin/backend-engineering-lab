const express = require("express");
const taskRouter = express.Router();

taskRouter.get('/', (req, res, next) => { 
    
    res.send({
        status: 200
    });
});



module.exports = [
    taskRouter,
]