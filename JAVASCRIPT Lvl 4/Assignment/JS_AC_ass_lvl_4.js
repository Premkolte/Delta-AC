// //qs 1
// let arr = [1,2,3,4,5,6,2,3]
// let num = 2;
// for (let i = 0 ; i<arr.length; i++){
//     if(num==arr[i]) arr.splice(i,1);
// }
// console.log(arr);


// //qs 2
// let numb = 287152;
// let c = 0;

// while(numb>10){
//     numb = numb/10;
//     c++;
// }
// console.log(c+1);


// //qs3
// let number=287152;
// let sum=0;
// let copy=number;
// while(copy>0)
// {
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum)


// //qs4
// let num = 5;
// let fac =1;

// for (let i = 1;i<=num;i++){
//     fac = fac * i;
// }
// console.log(fac);


// qs5
let arr3 = [2,5,10,4,12,7,1,9];
let large = 0;

for (let i =0;i<arr3.length ; i++){
    if(arr3[i]>large) large = arr3[i];
}

console.log(large);