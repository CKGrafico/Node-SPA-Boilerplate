require('reflect-metadata');
const glob = require('glob');
const inversify = require('inversify');

// Require all services
let services = {};
let servicesIds = {};
let modules = glob.sync(`${__dirname}/api/**/*.service.*`);
modules.forEach(_module => {
    const service = require(_module);
    servicesIds[service.name] = Symbol(service.name);
    services[service.name] = service;
    inversify.decorate(inversify.injectable(), services[service.name]);
});

// Inject services dependencies
inversify.decorate(inversify.inject(servicesIds.RandomizerService), services.RandomsService, 0);

// Bind services to container
let container = new inversify.Container();
container.bind(servicesIds.RandomizerService).to(services.RandomizerService).inSingletonScope();
container.bind(servicesIds.RandomsService).to(services.RandomsService).inSingletonScope();

// Require all controllers
let controllers = {};
let controllersIds = {};
modules = glob.sync(`${__dirname}/api/**/*.controller.*`);
modules.forEach(_module => {
    const controller = require(_module);
    controllersIds[controller.name] = Symbol(controller.name);
    controllers[controller.name] = controller;
    inversify.decorate(inversify.injectable(), controllers[controller.name]);
});

// Inject controllers dependencies
inversify.decorate(inversify.inject(servicesIds.RandomsService), controllers.RandomsController, 0);

// Bind controllers to container
container.bind(controllersIds.RandomsController).to(controllers.RandomsController).inTransientScope();
container.bind(controllersIds.ValuesController).to(controllers.ValuesController).inTransientScope();

module.exports = {
    container: container,
    identifiers: controllersIds
};