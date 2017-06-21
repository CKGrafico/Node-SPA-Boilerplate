require('reflect-metadata');
const glob = require('glob');
const inversify = require('inversify');


// Require all service
let items = {};
let types = {};
let modules = glob.sync(`${__dirname}/api/**/*.service.*`);
modules.push(...glob.sync(`${__dirname}/api/**/*.controller.*`));
modules.forEach(_module => {
    const item = require(_module);
    types[item.name] = Symbol(item.name);
    items[item.name] = item;
    inversify.decorate(inversify.injectable(), items[item.name]);
});

// Inject items dependencies
inversify.decorate(inversify.inject(types.RandomizerService), items.RandomsService, 0);

inversify.decorate(inversify.inject(types.RandomsService), items.RandomsController, 0);

// Bind to container
let container = new inversify.Container();
container.bind(types.RandomizerService).to(items.RandomizerService).inSingletonScope();
container.bind(types.RandomsService).to(items.RandomsService).inSingletonScope();

container.bind(types.RandomsController).to(items.RandomsController).inTransientScope();
container.bind(types.ValuesController).to(items.ValuesController).inTransientScope();

module.exports = {
    container: container,
    types: types
};