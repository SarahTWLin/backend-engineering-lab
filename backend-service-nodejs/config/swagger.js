const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Task Management API",
            version: "1.0.0",
            description: "Backend API (Node.js) for managing tasks",
        },
        servers: [
            {
                url: "http://localhost:3000",
            }
        ]
    },
    apis: ["./routes/*.js", "./docs/swaggerSchemas.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;