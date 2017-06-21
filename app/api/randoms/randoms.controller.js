const MAX = 100;

class RandomsController {
    get(req, res) {
        let randomsService = res.container.get(res.identifiers.RandomsService);

        let random = randomsService.create(MAX);
        res.send({value: random});
    }
}

module.exports = RandomsController;