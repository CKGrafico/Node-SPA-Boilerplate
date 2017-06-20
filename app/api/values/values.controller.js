const Value = require('./value.model');

let getValue = (req, res) => {
    let val = req.params.value;

    res.send(new Value(val));
};

module.exports = {
    getValue: getValue
};

