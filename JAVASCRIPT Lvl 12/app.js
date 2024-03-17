let btn= document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fac = await getfact();
    // console.log(fac);
    let p = document.querySelector("p");
    p.innerHTML = fac;

})



let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         // console.log(res.json());
//         res.json().then((data)=>{

//             console.log(data.fact);
//         })
//     })
//     .catch((err)=>{
//         console.error(err);
//     });

// fetch and await
// async function getfact(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//     }
//     catch (e){
//         console.log(e);
//     }
// }

// axios
async function getfact(){
    try {
        let res = await axios.get(url);
    return res.data.fact;
    } catch (e){
         console.log("no fact found");
    }
}