{
	//基本定义和生成实例
	class Parent{
		constructor(name='tzc'){
			this.name = name;
		}
	}
	let v_parent = new Parent('v');
	console.log('构造函数和实例',v_parent);
}
{
	//继承
	class Parent{
		constructor(name = 'tzc'){
			this.name = name;
		}
	}

	class Child extends Parent{
		constructor(name = 'cz'){
			super(name);
			this.type = 'child';
		}
	}

	console.log('继承',new Child());
}

{
	//get set
	class Parent{
		constructor(name = 'tzc'){
			this.name = name;
		}

		get longName(){
			return 'xxx'+this.name;
		}

		set longName(value){
			this.name = value;
		}
	}


	let v = new Parent();
	console.log('getter',v.longName);
	v.longName = 'hello';
	console.log('getter',v.longName);
}

{
	//静态方法
	class Parent{
		constructor(name = 'tzc'){
			this.name = name;
		}

		static tell(){console.log('tell'); }
	}
	Parent.tell();
}

{
	//静态属性
	class Parent{
		constructor(name = 'tzc'){
			this.name = name;
		}
	}

	Parent.type = 'test';
	console.log('静态属性',Parent.type);
}













