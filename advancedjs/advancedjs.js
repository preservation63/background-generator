function isUserValid(bool) {
return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";


var automatedAnswer =
    "Your account # is" + ( isUserValid(true) ? " 1234" : " available" );

console.log(answer);
console.log(automatedAnswer);       

Эти функции лучше чем if и else, if else.
Выполняют такую же задачу, но удобнее


function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
		whatHappens = "you encounter a monster";
		break;
		case "back":
		whatHappens = "you arrived home";
		break;
		case "right":
		whatHappens = "you found a river";
		break;
		case "left":
		whatHappens = "you run into a troll";
		break;
		default:
		whatHappens = "please enter a valid direction"
	}
	return whatHappens;
}

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);
||
let experience = 100
let wizardLevel = experience > 90 ? true : false;
console.log(wizardLevel);
||
let experience = 80
let wizardLevel = experience > 90 ? true : false;
console.log(wizardLevel);

Нынче лучше использовать let, нежели var

const a = 5;
a = 6;
|| Отличие const от let в том, что значения в const изменить нельзя
let a = 5;
a = 6;
|| Но
const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false,
}
console.log(obj.wizardLevel = true);
|| Не работает. Чтобы быстрее выделить объекты из const можно использовать такую команду

const { player, experience } = obj;
obj.player = "wdw", obj.experience = 101;
console.log(player, experience);
|| Рабочий способ
let obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false,
};
obj.player = "wdw", obj.experience = 101;
console.log(obj.player, obj.experience);
||
const name = "john snow";
const obj = {
	[name]: "hello",
	[1 + 2]: "hihi",
}
console.log(obj);
|| Будет использоваться дальше в React
const a = "Simon"; const b = true; const c = {};
const obj = {
	a, b, c,
}
console.log(obj);
|| Template strings
const name = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${age-10}. 
What a lovely ${pet} you have`;
console.log(greetingBest);
|| default arguments
function greet(name="", age=30, pet="cat") {
	return `Hello ${name} you seem to be ${age-10}. 
What a lovely ${pet} you have`;
}
console.log(greet());

console.log(greet("John", 50, "monkey"));

const greet = (name="Sally") => (
`hello ${name}`);
console.log(greet());

|| arrow functions
function add(a, b) {
	return a + b;
};
console.log(add(12, 21));
Теперь можно сделать легче эту же функцию таким способом
let add = (a, b) => {
	return a + b
};
console.log(add(12, 21));
|| Advanced Functions
const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}
const newFunc = first();
console.log(newFunc());
|| Currying
const multiply = (a, b) => a * b
Эта функция равносильна этой
const curriedMultiply = (a) => (b) => a * b
console.log(curriedMultiply(3)(4));
const multiplyBy5 = curriedMultiply(4);
console.log(multiplyBy5(5));
|| Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
|| Advanced Arrays 
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
});
console.log(double);
Эта функция равносильна этой
const array = [1, 2, 10, 16];
const mapArray = array.map((num) => {
	return num * 2;
});
console.log(mapArray);
|| map
Если у нас один array, то можно сделать эту функцию меньше, вот так
const array = [1, 2, 10, 16];
const mapArray = array.map(num => num * 2);
console.log(mapArray);
|| filter 
const array = [1, 2, 10, 16];
const filterArray = array.filter(num => {
	return num > 5;
});
console.log(filterArray);
Если у нас один array, то можно сделать эту функцию меньше, вот так
const array = [1, 2, 10, 16];
const filterArray = array.filter(num => num > 5);
console.log(filterArray);
То есть можно выбрать параметры из array, которые хотим умножить
и делаем эту функцию
const array = [1, 2, 10, 16];
const filterArray = array.filter(num => {
	return num > 5;
});

const mult = filterArray.map((num) => {
    return num * 2;
    });
console.log(mult);

const array = ["p", "hh", "kkk", "ssss"];
const filter = array.filter((word) => {
    return word === "ssss";
});
console.log(filter)

|| reduce
const array = [1, 2, 10, 16];
const reduceArray = array.reduce ((accumulator, num) => {
	return accumulator + num;
}, 5); // Если сюда подставить любое число, то к сумме будет оно добавляться
       // Это число и есть accumulator
console.log(reduceArray);
|| Advanced Objects
|| context vs scope
const object4 = {
	a: function() {
console.log(this)
    }
};
console.log(object4.a());
|| instantiation
class Player {
	constructor(name, type) {
		console.log(this);
	this.name = name;
	this.type = type;
}
introduce() {
	console.log(`Hi I am ${this.name}, I am ${this.type}`);
}
};
class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEEEE Im a ${this.type}`);
	}
};
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
console.log(wizard1.play());
console.log(wizard2.play());
console.log(wizard1.introduce());
console.log(wizard2.introduce());
|| Clone
let obj = {a: "a", b: "b", c: {
	deep: "try and copy me"
} };
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
|| ES7, ES8, ES10
const pets = ["cat", "dog", "bat"];
pets.includes("dog") || pets.includes("bird");

const square = (x) => x**2;
const cube = (y) => y**3;
console.log(square(5));
console.log(cube(4));

"Turtle".padStart(10);

"Turtle".padEnd(10);

const fun = (a, b, c, d, e,) => {
console.log(a);
}
fun(1,2,3,4,);

let df = [a = 1, b = 2];
let fun = (a, b, c, d, e,) => {
console.log(fun());
};
console.log([a, b,]);


let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
Object.values(obj).forEach(value => {
	console.log(value);
});

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
Object.entries(obj).forEach(value => {
	console.log(value);
})

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
Object.entries(obj).map(value => {
	return value[1] + value[0].replace("username", "");
});

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
Object.entries(obj).map(value => {
	return value[1] + value[0].replace(/[0-9]/g, "",);
    
}); //Как убрать все числа из string


const array = [1,2,3,4,5];
console.log(array);
const array2 = [1,[2,3],[4,5]];
array2.flat()

const array3 = [1,2,[3,4,[5]]];
console.log(array3.flat());
const array4 = [1,2,[3,4,[5]]];
console.log(array4.flat(Infinity)); //Вместо infinity можно поставить любое число

const entries = ["bob", "sally",,,,,, "cindy"];
console.log(entries.flat());

const array4 = [1,2,[3,4,[5]]];
const array5 = array4.flatMap(number => number + "plus");
console.log(array5);

const userName = "    fddfdf";
const userName2 = "fssffssf    ";
console.log(userName.trimStart());
console.log(userName2.trimEnd());

userProfiles = [["efef", 20], ["effef", 40], ["wddwwd", 60]];
Object.fromEntries(userProfiles);

try {
	true + "hi"
} catch {
	console.log("you messed up");
};

try {
	bob + "hi"
} catch {
	console.log("you messed up");
};
|| Advanced Loops
const basket = ["apple", "oranges", "grapes"];
basket.forEach(fruits => {
	console.log(fruits);
});

const basket = ["apple", "oranges", "grapes"];
for (fruits of basket) {
	console.log(fruits);
}; //Работает с arrays, strings
for (fruits in basket) {
	console.log(fruits);
}; //Не работает с arrays, strings, а работает с objects
|| ES2020, ES2021, ES2022
let andrei_pokemon = {
	raichu: {
		species: "Mouse Pokemon",
		height: 0.8,
		weight: 30,
	}
};
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

let andrei_pokemon = {
	pikachu: {
		species: "Mouse Pokemon",
		height: 0.8,
		weight: 30,
		power: 0,
	}
};
let power = andrei_pokemon?.pikachu?.power ?? "no power";
console.log(power);

const str = "ztm is the best of the best";
str.replaceAll("best", "worst"); //Это используется для того, чтобы поменять все слова в string

const str = "ztm is the best of the best";
str.replace("best", "worst"); //Это используется для того, чтобы поменять одно слово в string

const arr = [100, 200, 400, 50000, 10];
arr.at(-2);

const flattned = [[0, 1], [2, 3], [4,5]].reduce((accumulator, array) => {
	debugger;
	return accumulator.concat(array);
}, []); // Concat method позволяет объединять к примеру arrays

console.log("1");
setTimeout(() => {
	console.log("2");
}, 2000);
console.log("3");


|| af = () => {
   "dw"
};
let sd = af((wd) => {
    console.log(af.sd());
});
||
const a = () => {
const b = () => {
console.log(2);
}
    b();
};
console.log(a());
||
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch",
};
let trys = Object.values(obj);
let himap = trys.map(name => "hi " + name)
console.log(himap);















