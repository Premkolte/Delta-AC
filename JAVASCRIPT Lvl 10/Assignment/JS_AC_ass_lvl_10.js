but = document.querySelector("button");

but.addEventListener('click', function() {
    but.style.backgroundColor = "green";
});

inp = document.querySelector("input");
h2 = document.querySelector("h2");

inp.addEventListener("input", function () {
    let str = inp.value;
    h2.innerText = str;
});

