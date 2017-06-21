const RandomizerService = require('./randomizer.service');

module.exports = test => {
    test('Randomizer Service', t => {

        test('When the min is bigger than the max it should throw and exception', t => {
            let service = new RandomizerService();
            t.throws(() => service.random(10, 4))
            t.end();
        });

        test('When the max is bigger or equal than the min it should return a number between both', t => {
            let service = new RandomizerService();
            const min = 1;
            const max = 3;
            let random = service.random(min, max);

            t.equal(random >= min && random <= max, true);
            t.end();
        });

        t.end();
    });
};
