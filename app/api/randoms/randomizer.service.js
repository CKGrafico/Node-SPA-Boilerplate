class RandomizerService {
    random(min, max) {
        if (min > max) {
            throw new Error('The `max` value must be bigger than `min` value.');
        }

        return Math.floor(Math.random() * max) + min;
    }
}

module.exports = RandomizerService;