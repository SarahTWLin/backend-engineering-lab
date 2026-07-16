
const pool = require("../database/db");


const getApiHealth = (req, res, next) => {
    try {
        res.status(200).send({
            status: "OK"
        });
    }
    catch (err) {
        next(err); 
    }
};

const getDatabaseHealth = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT NOW();'); 
        
        res.status(200).send({
            status: "OK",
            timestamp: result.rows[0].now
        });
    }
    catch(err) {
        next(err);
    }
};

module.exports = {
    getApiHealth,
    getDatabaseHealth
};