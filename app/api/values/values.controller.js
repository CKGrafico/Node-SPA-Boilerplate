const Value = require('./value.model');

class ValuesController {
    getValue(req, res) {
        let val = req.params.value;
        res.send(new Value(val));
    }
}

module.exports = ValuesController;