const controller = require('./values.controller');

const routes = {
    value: '/api/values/:value'
};

module.exports = app => {
    app.get(routes.value, controller.getValue);
};
