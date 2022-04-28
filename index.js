require('module-alias/register');

var path = require('path');
var fs = require('fs');
var _ = require('lodash');



require('#/b')();




// require('#/t/test');
require('#/a');

var a = function(options){
	console.log('bc')
}


// interface Pos {
// 	x:number,
// 	y?:number,
// }

// var a:Pos[] = [];

// var self = function(_options?:Pos){
// 	var defaults = {

// 	}

// 	var options = _.extend({},defaults,_options);

// 	console.log(options)
// }

// self({
// 	x:1,
// 	y:2
// })


// a.push({
// 	x:1,
// 	y:2
// })

// a.push({
// 	x:3,
// 	// y:2
// })

// console.log(a)
// console.log(c)

// module.exports = self;
