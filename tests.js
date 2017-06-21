const glob = require('glob');
const tape = require('tape');

// Require tests
let tests = glob.sync('./app/**/*.test.*');
tests.forEach(_test => require(_test)(tape));
