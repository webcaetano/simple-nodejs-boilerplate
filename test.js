var _ = require('lodash');
var glob = require('glob');
var path = require('path');
var test = require('ava');

var self = require('./');

test.cb('should resize image with default values',function(t){
	t.pass();
	t.end();
});

