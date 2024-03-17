// //1
// let arr=[1,4,6,7];

// // let square = arr.map((el) => el*el);
// // console.log(square);

// // let sum = square.reduce((sum,e)=>sum + e);
// // console.log(sum);

// // let avg = sum / arr.length;
// // console.log(avg);

// //2
// let newarr = arr.map ((e) => e +5);
// console.log(newarr);

// //3
// let ar = ["Hello" , "World"];
// let upper = ar.map((ek) => ek.toUpperCase());
// console.log(upper);

// //4
// const doub = (arrr,...args)=>[
//     ...arrr,
//     ...args.map((v)=> v*2)
// ];


//5

const mergeobject = (obj1, obj2)=>{
    (...obj1,
    ...obj2)
};

mergeobject({a:1,b:2}, {c:3,d:4})