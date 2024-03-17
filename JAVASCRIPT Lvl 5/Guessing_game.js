let guess = prompt("enter the guessed number between 1 to 100");

let random = Math.random() *100 ;
let ran = Math.floor(random) +1;
console.log(ran);
let count =1;
while(true){
    if (guess == "quit"){
        console.log ("user quit");
        break;
    }
    if(guess == ran){
        console.log("You are right ! congrats !! random number was",ran);
        break;
    } else if(guess< ran){
        guess = prompt("hint : your guess is too low , try again ");
    }else if(guess > ran){
        guess = prompt("hint : your guess is too high , try again ");
    }
    else{
        guess = prompt("Your guess was wrong . please try agian");
    }
    count++;
    
}

console.log("you took",count ,"attempts");