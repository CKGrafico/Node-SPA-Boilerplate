const controller = require('./randoms.controller');

const routes = {
    base: '/api/randoms'
};

module.exports = app => {
    app.get(routes.base, controller.get);
};
