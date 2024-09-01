const express = require('express');
const bodyParser = require('body-parser');
const config = require('./default');


module.exports = () => {
    const app = express();

    app.set('port', process.env.port || config.server.port);

    app.use(bodyParser.json());

    require('../api/routes/customersWallets')(app);

    return app;

}