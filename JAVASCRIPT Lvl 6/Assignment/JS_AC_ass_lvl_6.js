//1
let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;

function get(arr , num){
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

get(arr,num);


//2
let str = "abcdabcdefgggh";
function unique(str) {
    let ans = "";
    for(let i = 0 ; i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans = ans + currChar;
        }
    }

    return ans;
}
console.log(unique(str));

//3
let country = ["Australia","Germany","UnitedStatesofAmerica"]
function long(country){
    let ansidx = 0;
    for (let i = 0 ; i < country.length; i++){
        let anslen = country[ansidx].length;
        let curlen = country[i].length;
        if(curlen>anslen) {
            ansidx = i;
        }
    }
    return country[ansidx];
}
console.log(long(country));

//4
let str1="apnacollege";
function vol (str){
    let c=0;
    for(let i = 0; i<str.length;i++){
        if(
            str[i] == "a" || str[i] == "e" ||
            str[i] == "i" ||str[i] == "o" ||
            str[i] == "u" 
        )
        c++;
    }
    return c;
}
console.log(vol(str1));

//5
