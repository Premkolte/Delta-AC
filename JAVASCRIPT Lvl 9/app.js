// // let smallimage = document.getElementsByClassName("oldImg");
// // for(let i = 0 ;i<smallimage.length;i++){
// //     console.log(smallimage[i].src);
// // }


// // console.dir(document.querySelector("h1"));
// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelectorAll("div a"));


// let links = document.querySelectorAll(".box a");

// // for(let i = 0 ; i<links.length;i++) {
// //     links[i].style.color = "green";
// // }

// for(li of links){
//     li.style.color="green"; //inline style
// }



let para1 = document.createElement("p")
para1.innerText = "i am para";
document.querySelector('body').append(para1);
para1.classList.add('red');



let h3 = document.createElement("h3")
h3.innerText = "i am h3";
document.querySelector('body').append(h3);
h3.classList.add('blue');



let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("para");

h1.innerText = "I am in a div";
para.innerText = "Me Too"

div.append(h1);
div.append(para);

div.classList.add("boxx");
document.querySelector('body').append(div);
