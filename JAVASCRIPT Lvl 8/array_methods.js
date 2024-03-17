// //forEach fn
// let arr = [1,2,3,4,5];

// //normal fn
// let pri = function(el){
//     console.log(el);
// }
// arr.forEach(pri);

// // arrow fn
// let q = (e) =>{
//     console.log(e);
// }
// arr.forEach(q);


// // Map fn
// let num = [1,2,3,4];

// let dou = (el)=>{
//     return el * el;
// };
// let dpo = num.map(dou);
// console.log(dpo);


// // filter fn
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let c = function (ee){
//     if(ee % 2 ==0) return ee;
// }
// let filt = nums.filter(c);
// console.log(filt);

// //reduce fn
// let nu = [1,2,3,4];
// let final = nu.reduce((acc , ell)=> (acc + ell));
// console.log(final);

// // reduce fn for return max in an array
// let arrr =[1,2,4,7,63,63,99,8,9];

// let max = arrr.reduce((m,eel) => {
//     if (m<eel) return eel;
//     else return m;
// });

// console.log(max);


// //practice qs 1
// let ar=[10,20,30,40]; 
// let ans = ar.every((a) => a%10 == 0);

// console.log(ans);

// function sum(a, b=5){
//     return a+b;
// }

// console.log(sum(3));
// console.log(sum(3,4));

// //spread 

// arr=[1,2,3,4]
// console.log(...arr);

// //object spread
// let obj={name:'John',age:30};

// let datacopy = {...obj ,name : "prem"};
// console.log(datacopy);

// //rest parameter
// function sum(...arg){
//     for (let i= 0;i<arg.length;i++){
//         console.log("you gave us: " , arg[i]);
//     }
// }

// function min(x,y,z){
//     console.log(arguments); 
// }

function sum(...args){
    return args.reduce((min,el) => min +el);
}

console.log(sum(1,2,3,4,5))



//destructuring
let names = ["tony","bruce","peter","steve","abc"];
let [winner , runnerup,...others] = names;
console.log(winner);
console.log(others);

//destructuring of object
const student = { 
    name: "Tony",
    age: 28,
    class:9,
    pass:"abcd"
}
let {name : nav , pass:secret} = student;
console.log(nav);
console.log(secret);
