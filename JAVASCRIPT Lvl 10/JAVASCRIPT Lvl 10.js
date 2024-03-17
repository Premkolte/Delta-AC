// let btn = document.querySelectorAll("button");

// btn.onclick = function (){
//     console.log("BUTTON WAS CLIKCED");
//     // alert("BUTTON clicked");
// }

let btns = document.querySelectorAll("button");

for (bt of btns){
    // bt.onclick = sayHello;

    bt.addEventListener("click" , sayHello);
    bt.addEventListener("click" , sayname);
}

function sayHello(){
    alert("hello");
}
function sayname(){
    alert("Prem");
}


let inp = document.querySelector("input");

inp.addEventListener("keydown" ,function(event){
    // console.log("code = ", event.code);dw
    
    if(event.code == "KeyW"){
        console.log("UP")
    } else if(event.code == "KeyA"){
        console.log("LEFT")
    } else if(event.code == "KeyD"){
        console.log("RIGHT")
    } else if(event.code == "KeyS"){
        console.log("DOWN")
    }
})



//form
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let inpt = document.getElementById("info");
    console.log(inpt.value);
});

