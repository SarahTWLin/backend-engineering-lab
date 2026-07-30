const path = require('path');
const dotenv = require("dotenv");

dotenv.config({
    path:  path.resolve(__dirname, 'backend-service-nodejs/.env.dev'),
    override: true
});
