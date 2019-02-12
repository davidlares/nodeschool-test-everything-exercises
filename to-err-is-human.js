var tape = require('tape');
var feedCat = require(process.argv[2]);

tape('cat food exam', function(t){
	// calling test multiple times
	t.plan(2)

	// if chocolate = throws error
	t.throws(function(){
		feedCat('chocolate');
	});
	// other scenario
	t.equal(feedCat('anything else'), 'yum');
})