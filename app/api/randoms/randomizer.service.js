class RandomizerService {
    random(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
}

module.exports = RandomizerService;