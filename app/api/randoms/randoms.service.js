class RandomsService {

    constructor(randomizerService) {
        this.randomizerService = randomizerService;
    }

    create(max) {
        return this.randomizerService.random(1, max);
    }
}

module.exports = RandomsService;