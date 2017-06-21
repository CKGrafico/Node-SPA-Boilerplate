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
    inversify.decorate(inversify.injectable(), services[service.name]);
});

// Inject dependencies
inversify.decorate(inversify.inject(identifiers.RandomizerService), services.RandomsService, 0);

// Bind to container
let container = new inversify.Container();
container.bind(identifiers.RandomizerService).to(services.RandomizerService).inSingletonScope();
container.bind(identifiers.RandomsService).to(services.RandomsService).inSingletonScope();

module.exports = {
    container: container,
    identifiers: identifiers
};