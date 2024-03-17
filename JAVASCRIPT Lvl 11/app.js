// function savetoDb(data,success,failure){
//     let intspeed = Math.floor(Math.random() *10) + 1;
//     if(intspeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb(
//     "apna college",
//     ()=>{
//         console.log("success");
//     },
//     ()=>{
//         console.log("failure");
//     }
// )


// Promise
function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let intspeed = Math.floor(Math.random() *10) + 1;
    
        if(intspeed > 4){
            resolve("Data saved successfully!");
        }
        else{
            reject("Failed to save data!");
         }
    });
}

savetoDb("apna college")