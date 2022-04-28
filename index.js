require('module-alias/register');

var path = require('path');
var fs = require('fs');
var _ = require('lodash');


// require('#/t/test');
require('#/a');

// insert defaults here
var defaults = {

}

var self = function(options){
	options = _.extend({},defaults,options);

}

console.log('x')

// module.exports = self;
