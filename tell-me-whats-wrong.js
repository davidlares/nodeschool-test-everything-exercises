// node assert native module example
var assert = require('assert');
// requiring the path!
var isCoolNumber = require(process.argv[2]);
assert.ok(isCoolNumber(42), true, true);