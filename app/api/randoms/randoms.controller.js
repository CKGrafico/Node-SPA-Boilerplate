const MAX = 100;

class RandomsController {
    constructor(randomsService) {
        this.randomsService = randomsService;
    }

    get(req, res) {
        let random = this.randomsService.create(MAX);
        res.send({value: random});
    }
}

module.exports = RandomsController;