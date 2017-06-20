let get = (req, res) => {
    res.send(Math.random() + '');
};

module.exports = {
    get: get
};

