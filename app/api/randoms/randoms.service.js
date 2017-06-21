class RandomsService {
    constructor(randomizerService) {
        this.randomizerService = randomizerService;
        this.min = 1;
    }

    create(max) {
        if (this.min > max) {
            throw new Error(`The 'max' value must be bigger than ${this.min}.`);
        }

        return this.randomizerService.random(this.min, max);
    }
}

module.exports = RandomsService;