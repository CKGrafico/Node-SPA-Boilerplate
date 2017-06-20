const randomsService = require('./randoms.service');

const MAX = 100;

let get = (req, res) => {
    let random = randomsService.create(MAX);
    res.send({value: random});
};

module.exports = {
    get: get
};

