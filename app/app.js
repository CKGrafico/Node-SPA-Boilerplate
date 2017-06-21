const glob = require('glob');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const ioc = require('./app.container');

// Create server
let app = express();

// Configure bodyparser to access to data on POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require our routers
let modules = glob.sync(`${__dirname}/api/**/*.router.*`);
modules.forEach(_module => require(_module)(app, ioc));

// Start the server
app.listen(config.port, () => {
  console.log(`${app.name} listening at ${config.port}`);
});