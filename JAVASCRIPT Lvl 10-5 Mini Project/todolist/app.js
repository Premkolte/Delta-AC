let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener('click', function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let b = document.createElement("button");
    b.innerText = "Delete";
    b.classList.add("delete");
    
    item.appendChild(b);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener( 'click' ,function (e) { 
    if(e.target.nodeName == "BUTTON"){
        let listitem = e.target.parentElement;
        listitem.remove();
    }
})




// let delbtn = document.querySelectorAll(".delete");
// for(de of delbtn){
//     de.addEventListener('click', function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

