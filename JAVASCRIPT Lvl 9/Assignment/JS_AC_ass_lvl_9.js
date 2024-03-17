// 1 //
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// 2 //
button.setAttribute("id" , "btn");
input.setAttribute("Placeholder" , "Username");

// 3 //
let btn = document.querySelector("#btn");
btn.classList.add("blue");


// 4 //
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);


// 5 //
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice"
document.querySelector("body").append(p);



