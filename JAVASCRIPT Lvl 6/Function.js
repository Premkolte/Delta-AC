function hello(){
    console.log("Hello");
}

hello();

function print1to5(){
    for(let i = 1; i<6;i++){
        console.log(i);
    }
}

print1to5();

// qs 2
function dice(){
    let random = Math.random() * 6 +1;
    console.log(Math.floor(random));
}
dice();

//funtion with argument (parameter)
function print(name , age){
    console.log(`my name is ${name} and age is ${age}`);

}

print("prem" , 18);
print("prem");
print(18); // this is wrong ... ORDER IS very IMPORTANT in function parameter

//av 5
function avg (a,b,c){
    let av = (a+b+c)/3;
    console.log(av);
}
avg(3,4,5);


//4
function table(n){
    for (let i = 1; i<=10; i++){
        console.log(`${n} X ${i} =`,i*n);
    }
}

table (6);

//return fn
function summ (n){
    let sum = 0;
    for (let i = 1 ; i<=n ;i++){
        sum = sum + i;
    }
    return sum; 
}
console.log(summ(10000));

//concatination
let str = ["hi"," " ,"hello","bye","!"];

function concat (strr){
    let con = "";
    for (let i = 0 ; i<strr.length ; i++){
        con = con + str[i];
    }
    return con;
}

console.log(concat(str));

// accesebility scope 

let sum = 54; // Global scope
function calsum (a,b){
    let sum = a+b;  //Function scope
    console.log(sum)
}
calsum(1,4);

//scope block
{   let i = 25;
    let j = 10;
        console.log(i)
}   //Block scope   
// console.log(j);

//lexical scope
function out(){
    let x = 5; 
    let y = 6;

    function inn (){
        console.log(x);
        console.log(y);
    }
    inn();
}
out();

//qs 7
let greet = "hello";

function changegreet (){
    let greet = "mamaste";
    console.log(greet);
    function innergreet (){
        console.log(greet);
    }
}

console.log(greet);
changegreet();


// funtion expressions
let sumk = function (a,b){
    return a+b;
}
console.log(sumk(3,4));



// higher order functions
function multiplegreet(func , count){
    for (let i = 0 ;i<count;i++){
        func();
    }
}
let gret = function (){
    console.log("hello");
}

multiplegreet(gret , 7);


//METHODS
const calc = {
    num : 55,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    } 
};