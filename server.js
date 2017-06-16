const express = require('express');
const config = require('./config');

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || config.port, function () {
  console.log('Website running');
});