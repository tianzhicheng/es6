// {
// 	let list = new Set();
// 	console.log(1);
// 	list.add(5);
// 	list.add(7);
// 	console.log('size',list.size);
// }
// {
// 	let arr = [1,2,3,4,5];
// 	let list = new Set(arr);
// 	console.log('size',list.size);
// }
// {
// 	let list = new Set();
// 	list.add(1);
// 	list.add(2);
// 	list.add(1);
// 	console.log('list',list);
// 	let arr = [1,2,3,1,2];
// 	let list2 = new Set(arr);
// 	console.log('unique',list2);
// }
// {
// 	let arr = ['add','delete','clear','has'];
// 	let list = new Set(arr);
// 	console.log('has',list.has('add'));
// 	console.log('delete',list.delete('add'),list);
// 	list.clear();
// 	console.log('list',list);
// }
// {
// 	let arr = ['arr','delete','clear','has'];
// 	let list = new Set(arr);

// 	for(let key of list.keys()){
// 		console.log('keys',key);
// 	}
// 	for(let value of list.values()){
// 		console.log('value',value);
// 	}
// 	for(let value of list.entries()){
// 		console.log('value',value);
// 	}

// 	list.forEach(function(item){
// 		console.log(item);
// 	})
// }
// {
// 	let weakList = new WeakSet();

// 	let arg = {};

// 	weakList.add(arg);

// 	console.log('weakList',weakList);
// }
// //map
// {
// 	let map = new Map();
// 	let arr = ['123'];
// 	map.set(arr,456);
// 	console.log('map',map,map.get(arr));
// }
// {
// 	let map = new Map([['a',123],['b',456]]);
// 	console.log(map);
// 	console.log('size',map.size);
// 	console.log('delete',map.delete('a'),map);
// 	console.log('clear',map.clear(),map);
// }
// {
// 	let weakmap = new WeakMap();
// 	let o = {};
// 	weakmap.set(o,123);
// 	console.log(weakmap.get(0));
// }

{
	let map = new Map();
	let array = [];
	//add
	map.set('t',1);
	array.push({t:1});
	console.info('map-array',map,array);


	//find
	let map_exist = map.has('t');
	let array_exist = array.find(item=>item.t);
	console.info('map-array',map_exist,array_exist);

	//update
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');
	console.info('map-array-modify',map,array);

	//delete
	map.delete('t');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1);
	console.info('map-array-delete',map,array);
}
{
	let set = new Set();
	let array = [];

	//add
	set.add({t:1});
	array.push({t:1});
	console.info('set-arr',set,array);

	//find
	let set_exist = set.has({t:1});
	let array_exist = array.find(item=>item.t);
	console.info('set_exist,array_exist',set_exist,array_exist);

	// update
	set.forEach(item=>item.t?item.t = 2 : "");
	array.forEach(item=>item.t?item.t = 2 : "");
	console.info('set-arr',set,array);

	//delete
	set.forEach(item=>item.t?set.delete(item):'');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1);
	console.info('set-arr-delete',set,array);
}

{
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//add
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;

	console.info('map-set-obj',map,set,obj);

	//find
	console.info({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	})

	//update
	map.set('t',2);
	item.t = 2;
	obj['t'] = 2;
	console.info('modify',map,set,obj);

	//delete
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.info('delete',map,set,obj);
}









































