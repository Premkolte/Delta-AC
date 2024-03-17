// if else 
//1
let  age = 14;
if(age>14)
{
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}


//2
let marks = 56;
if(marks>=80){
    console.log("A+");
}else if(marks >=60){
    console.log("A");
}else if(marks>=33){
    console.log("B");
}else {
    console.log("F");
}


//3 pract ques
let size = "L";
if(size === "XL")
{
    console.log("prize is 250");
}else if(size==="L")
{
    console.log("prize is 200");
}else if(size ==="M")
{
    console.log("prixe is 100");
}else if(size==="S") {
    console.log("prize is 50");
}



//nested if else
let mark = 50;
if(mark>=33)
{
    console.log("PASS");

    if(mark>=80)
    {
        console.log("A")
    }else{
        console.log("B")
    }
}else{
    console.log("better luck next time");
}
