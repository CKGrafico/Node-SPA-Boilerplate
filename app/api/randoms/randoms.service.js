const randomizerService = require('./randomizer.service');

class RandomsService {
    create(max) {
        return randomizerService.random(1, max);
    }
}

module.exports = new RandomsService();