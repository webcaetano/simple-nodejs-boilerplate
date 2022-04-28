module.exports = function(){
	var a:Boolean[] = [];
	var b:(string|number)[];

	a.push(true);
	b = [1,2,'a'];

	console.log(a)
	console.log(b)

	// var c?:object;

	var test = function(options?:{x:number,y?:number}){
		console.log(options)
	}
	// c = null;
	test({x:1});
}
