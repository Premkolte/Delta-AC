let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let rancol = getRandomColor();
    h3.innerText = rancol;

    let div = document.querySelector("div");
    div.style.backgroundColor = rancol;
})



function getRandomColor() {
    let red = Math.floor(Math.random() * 255 );
    let blue = Math.floor(Math.random() * 255 );
    let green = Math.floor(Math.random() * 255) ;

    let color = `rgb(${red},${blue},${green})`;
    return color;
}