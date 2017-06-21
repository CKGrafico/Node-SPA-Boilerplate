const RandomsService = require('./randoms.service');
const RandomizerBuilder = require('./randomizer.service.mock');

module.exports = test => {
    test('Randoms Service', t => {

        test('When the 1 is bigger than the max it should throw and exception', t => {
            var randomizerMock = new RandomizerBuilder()
                .withValue(5)
                .build();

            let service = new RandomsService(randomizerMock);
            t.throws(() => service.create(-1))
            t.end();
        });

        t.end();
    });
};
