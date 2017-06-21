const routes = {
    base: '/api/randoms'
};

module.exports = (app, ioc) => {
    let controller = ioc.container.get(ioc.identifiers.RandomsController);

    app.get(routes.base, (req, res) => controller.get(req, res));
};
