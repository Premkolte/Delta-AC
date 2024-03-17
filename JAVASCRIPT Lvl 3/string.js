//1
//stringName.trm()
let msg = " hello ";
console.log(msg);

msg1 = msg.trim();
console.log(msg1);


//2
//str.toUpperCase()  str.toLowerCase()
let str = "RanDom StrIng";

let lower = str.toLowerCase();
console.log(lower);

console.log(str.toUpperCase());


// 3
// str.indexOf()
let msgg = "ILoveCoding";
let indexOfL = msg.indexOf('l');
console.log(`The first 'l' is at position ${indexOfL}`);
//extra
let lastIndexOfO = msg.lastIndexOf('o');
console.log(`The last 'o' is at position ${lastIndexOfO}`);

//4  2 method at a time 
let Msg = "    Hello     ";
let trimMsg = Msg.trim().toUpperCase();
console.log(trimMsg);

// 5
// str.split()
let myStr = "I love coding in JavaScript.";
let wordsArray = myStr.split(" ");

console.log(wordsArray);


//6
//str.slice();
//str.slice[); very important
let sliceString = "Hello World!";
sliceString.slice(7,8);
 

// 7
// msg.replace(" "," ");  and msg.repeat(3);
let msg2 = "ILoveCoding";
let rep = msg2.replace("Love" , "do");
console.log(rep);

let m = msg2.repeat(4);
console.log(m);

