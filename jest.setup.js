const path = require('path');

require("dotenv").config({
    path:  path.resolve(__dirname, 'backend-service-nodejs/.env.dev'),
    override: true
});
