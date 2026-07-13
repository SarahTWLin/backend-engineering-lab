const express = require('express');
const healthcheckRouter = express.Router();

healthcheckRouter.get('/', (req, res, next) => {
    try {
    res.status(200).send({
        status: "OK"
});
    }
    catch (err) {
        console.error(err);
        
    }
});

module.exports = [
    healthcheckRouter
]