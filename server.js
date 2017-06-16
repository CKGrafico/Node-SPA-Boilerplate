const glob = require('glob');
const express = require('express');
const config = require('./config');

// Create server
let app = express();

// Configure bodyparser to access to data on POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require our routers
let modules = glob.sync('./api/**/*.router.*');
modules.forEach(_module => require(_module)(server));

// Start the server
app.listen(config.port, () => {
  console.log(`${app.name} listening at ${config.port}`);
});