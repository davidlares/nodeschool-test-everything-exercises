// Test Anything Protocol TAP

var assert = require('assert');
var fancify = require(process.argv[2]);

// custom module TAPE 
var tape = require('tape');

tape('TAP', function(t) {
	// t bindings
	var str = "Hello";
	t.equal(fancify(str),`~*~${str}~*~`);
	t.equal(fancify(str,true),`~*~${str.toUpperCase()}~*~`);
	// crashing because Capitalize
	t.equal(fancify(str,false,'!'),`~!~${str}~!~`);
	t.end();
});