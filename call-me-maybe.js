var assert = require('assert');
var tape = require('tape');
var repeatCallback = require(process.argv[2]);

tape('repeatCallback', function(t){
	var n = 2;
	t.plan(n);
	repeatCallback(n,function(){
	// process.nextTick = the callback function itself
	// process.repeatCallback(function(){
		t.pass('Its called')
	});
})
