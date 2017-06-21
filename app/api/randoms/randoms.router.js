const RandomsController = require('./randoms.controller');

const routes = {
    base: '/api/randoms'
};

module.exports = app => {
    let controller = new RandomsController();
    app.get(routes.base, controller.get);
};
