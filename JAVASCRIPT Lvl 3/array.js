//1  text array
let names = ["prem" , "prachi", " rani "];
console.log(names);

//2  num array
let num = [2,,4,6,8];
console.log(num[3]);

//3  mixed array
let info = ["prem" , 5 , 4];
console.log(info);

//chaining 
console.log(info[0]);
console.log(info[0][0]);
console.log(info[0][3]);

// Methods
let  cars = ["audi","bmw","maruti"];

cars.push("toyota");
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift("ferrari");
console.log(cars);

cars.shift();
console.log(cars);

// PRACTICE qs 2
let months = ["jan" , "july" , "march" ,"aug"];

months.shift();
months.shift();
months.unshift("jun");
months.unshift("july");

console.log(months);

// indexof()  &&& includes()
console.log(months.indexOf("march"))
console.log(months.includes("march"))

//contact   reverse 
let pri = ["red","green","blue"];
let sec = ["pink" , "black"];

let all = pri.concat(sec);
console.log(all);

let rev = sec.reverse();
console.log(rev);
console.log(sec);

// reverse() fn makes changes in the original array 
// contact() fn creates a new array 


// slice
let fruit = ["apple","mango","orange","banana"];
console.log(fruit.slice(2));
console.log(fruit.slice(2,3));  //3rd index word is NOT included
console.log(fruit.slice(-2));  //negetive number states those items from the end

//splice
let car = ["xuv","bmw","audi","maruti"]
console.log(car.splice(3));
car.splice(1,1)
console.log(car);
car.splice(1,0,"mercedes");
console.log(car);


// //Sort
console.log(car.sort());

// PRACTICE qs 3.1
let mont = ["jan","july","march","august"];
mont.splice(0,2,"july" ,"june");
console.log(mont);

// qs 3.2
let lang = ["cpp", "java" , "javascript" , "python"];
lang.reverse();
console.log(lang);
console.log(lang.indexOf("java"));

//array references
arrcopy = arr;
array = ["a","b"];

//nested array
let nu = [[1,2],[3,4],[5,6]];
console.log(nu[0][0]);     //output: 1

//practice qs 4
let ttt = [[' X  ','null',' O  '],['null',' X  ','null'],[' O  ','null',' X  ']]
console.log(ttt);
