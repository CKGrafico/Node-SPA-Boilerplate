require('reflect-metadata');
const glob = require('glob');
const inversify = require('inversify');

// Require all services
let services = {};
let identifiers = {};
let modules = glob.sync(`${__dirname}/api/**/*.service.*`);
modules.forEach(_module => {
    const service = require(_module);
    identifiers[service.name] = Symbol(service.name);
    services[service.name] = service;
});
