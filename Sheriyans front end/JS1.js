✅ word vs keyword 

✅ var let const 
==> all are diffrent

✅ HOISTING  ==> variable and funtions are hoisted which means their declaration is moved on the top of code

console.log(a);
var a = 12;
this would be converted to another form by HOISTING 

var a;
console.log(a); print a is undefined
a = 12;

✅ undefined vs not-defined
console.log(b); this would print not defined 
var c; 
console.log(c); this would print undefined

✅ Types in Js
⭐️ Primitives = Number String Boolean Undefined Null Object Array Function Date RegExp Symbol
⭐️ Reference = [] {} ()

💯 aisi koi bhi value jiskko copy karne par real coopy nahi hota , balki us main value ka refrerence pass hojaata hai , use hum reference value kahte hai , aur jisko copy karne par real copy ho jaye wo valu primitive type value hoti hai.

var a = 10;
var b = a;
b= b+2;

var r =[1,2,3,4];
var p = r;
p.pop();
result of print p n r is same as [1,2,3]


✅ conditional If else 
if(//conditiom){

}else{

}

✅ Loops
while loop - keep running the code until it becomes false
while(true){
}

for loop - 
for (var i = 0 ; i<10; i++){
}

✅ Functions
function helobolo(){
    console.log("hello");
}
helobolo();

✅ arrays ==> hum ek variable mein ek value store kar paate hai par han humein ek se jaada value store karni ho tab fir use hota hai array ka , matlab ki array apko freedom deta hai ek se jaada value use karne ki

✅ push pop shift unshift splice
var arr = [1,2,3,4,5];
arr.splice(2,1);


ek se jaada bande ki baat ki to hua array ,ek bande ke baare mein saari baat ki to hua Object

1) blank Object
var a = {};

2) filled object 
var ghadi = {
    brand : "sonata", //property
    model : function(){} //method
};
