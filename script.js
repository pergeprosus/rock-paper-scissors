//Pseudocode

//Create a function called getComputerChoice that randomly
//picks between rock paper or scissors. Ensure that the random picking
//system works with consolelogs before making any other portions of the game.

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(computerSelection) {
    let random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random]
    console.log(computerSelection)
}



function getPlayerChoice(playerSelection) {
    let playerChoice = prompt("Make your play");
    let lowercase = playerChoice.toLowerCase();
     playerSelection = lowercase;
     console.log(playerSelection)
}


// Create a function that actually plays the round. It will include two
//elements called playerSelection (NOT CASE SENSITIVE) and computerSelection, followed by
//a string that displays the winner and how they won (i.e rock over scissors)

function playRound(computerSelection, playerSelection) {
    let playerPoints = 0;
    let computerPoints = 0;
    //if (computerSelection == "rock" & playerSelection)

}
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
playRound();










