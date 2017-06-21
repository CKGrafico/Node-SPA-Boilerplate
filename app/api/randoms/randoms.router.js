const routes = {
    base: '/api/randoms'
};

module.exports = app => {
    let controller = app.container.get(app.types.RandomsController);

    app.get(routes.base, (req, res) => controller.get(req, res));
};
