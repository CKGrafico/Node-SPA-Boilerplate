const routes = {
    value: '/api/values/:value'
};

module.exports = app => {
    let controller = app.container.get(app.types.ValuesController);

    app.get(routes.value, (req, res) => controller.getValue(req, res));
};
