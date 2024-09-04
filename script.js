let arr = ["rock", "paper", "scissors"]

function computerchoice() {
    let choice = arr[Math.floor(Math.random() * arr.length)];
    console.log("compchoice : " + choice)
    return choice;
}

function humanchoice() {
    let humanchoice = prompt("enter rock paper or scissors :")
    console.log("userchoice : " + humanchoice)
    return humanchoice.toLowerCase();
}

let humanscore = 0;
let computerscore = 0;

function playround(humanchoice, computerchoice) {
    if(humanchoice === computerchoice){
        console.log("tie")
    }
    else if(
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock")
        (humanchoice === "scissors" && computerchoice === "paper")
    ){
        console.log("You win!")
    }
    else{
        console.log("You Lose!")
    }
}

playround(humanchoice(), computerchoice())