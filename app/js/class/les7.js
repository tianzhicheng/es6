{
	function test(x,y = "world"){
		console.log(x,y);
	}
	test('hello');
	test('hello','kill');
}

{
	let x = 'test';
	function test2(x,y=x){
		console.log(x,y);
	}
	test2('kill');
}
{
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4);
}
{
	console.log(...[1,2,3]);
	console.log('a',...[1,2,4]);
}
{
	let arrow = v => v*2;
	console.log('arrow',arrow(3));
}
{
	let arrow2 = ()=> 5;
	console.log(arrow2());
}
{
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}






























