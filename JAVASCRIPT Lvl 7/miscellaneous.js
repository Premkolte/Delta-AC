// //Arrow Function
// //plz visit notioin for further understanding of this...
// const sum = (a,b) => {
//     console.log(a+b);
// };
// sum(2,5);

// //set timeout
// console.log("hi there!");
// function ap() {
//     console.log("Apna College");
// }
// setTimeout(()=>ap(),2000);
// console.log("welcome to");

// //interwal 
// // function time(){
// //     console.log("prem");
// // }
// // let id = setInterval(()=>time(),3000);
// // console.log(id);


//this in arrow function
marks=98;
const student ={
    name :"prem",
    marks : 95,
    prop : this,//global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getmarks : () =>{
        console.log(this);  //parent's scope -->window
        return this.marks;
    },
    getinfo1: function(){
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },

    getinfo2: function(){
        setTimeout(function() {
            console.log(this); //window / global
        }, 2000);
    },

};


 // prsctice qs
 const square = (n)=>{
    console.log(n*n);
 };
 square(5);


 // qs2
//write a fn that prints "hello world" 5 times at interwal of 2s each
let id = setInterval(()=>{
        console.log("Hello World");
    },2000);

setTimeout(()=>{
    clearInterval(id) ;
    console.log("clear fn ran");
    console.log(id);
},10000);


