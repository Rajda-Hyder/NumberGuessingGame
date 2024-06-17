#! /-usr/bin/env node

import inquirer from "inquirer";

console.log(`*********CLI NUMBER GUESSING GAME*********`)

type anstype = {
    playerGuess : number,
    playingGame : number,
    playerName  : string,
    RandomNumber : number
};

let RandomNumber = (Math.floor(Math.random()*10));

let answer:anstype = await inquirer.prompt([
    {
       type : "input",
       name :  "playerName",
       message: "Enter your Name: ",
    },
    {
        type  : "number",
        name  : "playerGuess",
        message :"Enter your number in between 1 - 10: "
    }
])
console.log(`PLAYER NAME = ${answer.playerName},\nPLAYER GUESS = ${answer.playerGuess},\nRANDOM NUMBER = ${RandomNumber}` )
if (answer.playerGuess === RandomNumber){
    console.log("you win! you choce correct no.");
}
else{
    console.log("Better Luck next time.")
}

