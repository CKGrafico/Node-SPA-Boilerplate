require('reflect-metadata');
const glob = require('glob');
const inversify = require('inversify');


// Require all service
let items = {};
let ids = {};
let modules = glob.sync(`${__dirname}/api/**/*.service.*`);
modules.push(...glob.sync(`${__dirname}/api/**/*.controller.*`));
modules.forEach(_module => {
    const item = require(_module);
    ids[item.name] = Symbol(item.name);
    items[item.name] = item;
    inversify.decorate(inversify.injectable(), items[item.name]);
});

// Inject items dependencies
inversify.decorate(inversify.inject(ids.RandomizerService), items.RandomsService, 0);

inversify.decorate(inversify.inject(ids.RandomsService), items.RandomsController, 0);

// Bind to container
let container = new inversify.Container();
container.bind(ids.RandomizerService).to(items.RandomizerService).inSingletonScope();
container.bind(ids.RandomsService).to(items.RandomsService).inSingletonScope();

container.bind(ids.RandomsController).to(items.RandomsController).inTransientScope();
container.bind(ids.ValuesController).to(items.ValuesController).inTransientScope();

module.exports = {
    container: container,
    identifiers: ids
};