const routes = {
    value: '/api/values/:value'
};

module.exports = (app, ioc) => {
    let controller = ioc.container.get(ioc.identifiers.ValuesController);

    app.get(routes.value, (req, res) => controller.getValue(req, res));
};
