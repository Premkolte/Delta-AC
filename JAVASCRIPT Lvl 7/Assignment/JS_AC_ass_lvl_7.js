//1
let arr=[1,2,3,4,5,6];
const avg =(arr)=>{
    let sum = 0;
    for(let i = 0 ; i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(avg(arr));

//2
let num = 4;
const iseven = (num) =>{
    if(num%2==0) console.log("even");
}

iseven(num);