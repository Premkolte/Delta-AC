let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started == false){
        // console.log("hiiii");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },150);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);

    // console.log(randidx);
    // console.log(randcol);
    // console.log(randbtn);

    gameSeq.push(randcol);
    btnFlash(randbtn);
}

function checkAns(idx){


    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length ==gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! <br>your score : <b> ${level} </b> <br> Press any key to Restart `;
        body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    usercolor = this.getAttribute("id");
    userSeq.push(usercolor);
    // console.log(usercolor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (b of allbtns){
    b.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}