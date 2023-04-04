"use strict";

//generate random output
//create an array as it would be better to transverse through
//find the length of the array and use random to be slightly random
//use multiplication to increase the random number beyond 1
//get an interger opposed to a decimal number
let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let gameArray = choices.length; //find the length of the arr
    let firstChoice = Math.random();
    let myChoice = gameArray * firstChoice;
    let finalChoice = choices[Math.floor(myChoice)];
    return finalChoice;
}
//console.log();
let computerSelection = getComputerChoice();
console.log(computerSelection);

let player1 = 0;
let player2 = 0;
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
        player2++;
        return `You Lose, Paper beats Rock.\nYour points: ${player1}\nComputer points: ${player2}`;
    } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        player1++;
        return `You Won, Paper beats Rock.\nYour points: ${player1}\nComputer points: ${player2}`;
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
        player1++;
        return `You Won, Rock beats Scissors.\nYour points: ${player1}\nComputer points: ${player2}`;
    } else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
        player2++;
        return `You Lose, Rock beats Scissors.\nYour points: ${player1}\nComputer points: ${player2}`;
    } else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
        player2++;
        return `You Lose, Scissors beats Paper.\nYour points: ${player1}\nComputer points: ${player2}`;
    } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
        player1++;
        return `You Won, Scissors beats Paper.\nYour points: ${player1}\nComputer points: ${player2}`;
    }
    else {
        return `Looks like a stale-mate.\nYour points: ${player1}\nComputer points: ${player2}`;
    }
}
let playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));

//Make a game() function that runs for five times

let gameOver = "";

function game() {
    let round = 0;
    while (round < 5) {
        let playerSelection = prompt("Let's play:\nChoose between: Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();


        console.log(playRound(playerSelection, computerSelection));
        round++;
        
    }
    
    if ((round == 5) && (player1 < player2)) {
        gameOver = `Wow well played\nYour points: ${player1}\nComputer points: ${player2}`;
        return gameOver;
    } else if ((round == 5) && (player1 < player2)) {
        gameOver = `Better luck next time.\nYour points: ${player1}\nComputer points: ${player2}`;
        return gameOver;
    } else if ((round == 5) && (player1 == player2)) {
        gameOver = `It's officially tied.\nYour points: ${player1}\nComputer points: ${player2}`;
        return gameOver;
    }
}
let rps = game();
console.log(rps);
console.log(gameOver);




