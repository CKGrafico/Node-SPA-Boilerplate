const ValuesController = require('./values.controller');

const routes = {
    value: '/api/values/:value'
};

module.exports = app => {
    let controller = new ValuesController();
    app.get(routes.value, controller.getValue);
};
