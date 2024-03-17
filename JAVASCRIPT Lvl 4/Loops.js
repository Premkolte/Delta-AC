// ///FOR(intialisation ; condition ; upgradration)
// for(let i = 1;i<=10;i++){
//     console.log(i);
// }

// //odd numbers
// console.log("odd numbers till 15");
// for(let i=1; i<=15;i=i+2){
//     console.log(i);
// }

// //even numbers
// console.log("even numbers till 15");
// for(let i = 2;i<=15;i=i+2){
//     console.log(i);
// }

// //table of n
// // console.log("Table of n:");
// // let n = prompt("write your number");
// // for(let i=1;i<=10;i++) {
// //     console.log(`${n} * ${i} = ${n*i}`);
// // } 

// //nested loop
// console.log("Nested Loop");
// for(let i = 1 ; i<=3; i++){
//     for(let j = 1 ; j<=3;j++){
//         console.log(j);
//     }
// }

// //while Loops
// console.log("While loops");
// let k = 1;
// while(k<=5){
//     console.log(k);
//     k++;
// }

// //Game
// console.log("Guess the fav movie name");
// const favmovie = "avatar";

// let guess = prompt("guess the movie");

// while ((guess!= "favmovie") && (guess != "quit")){
//     guess = prompt("wrong guess ! Please try again");
// }
// if(guess == favmovie){
//     console.log("Congrats");
// }
// else{
//     console.log("You Quit!");
// }

// //for Loops for array
// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i = 0;i<fruits.length;i++){
//     console.log(i+1 , fruits[i]);
// }

// //nested loops
// //loop inside another loop


//for of loop
console.log("\nNested For Of Loop\n");
let fruit = ["mango","apple","banana","litchi","orange"];
for(f of fruit){
    console.log(f);
}

