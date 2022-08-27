//Pseudocode

//Create a function called getComputerChoice that randomly
//picks between rock paper or scissors. Ensure that the random picking
//system works with consolelogs before making any other portions of the game.

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(computerSelection) {
    let random = Math.floor(Math.random() * choices.length);
    computerSelection = random;
    console.log(computerSelection)
}
getComputerChoice()

// Create a function that actually plays the round. It will include two
//elements called playerSelection (NOT CASE SENSITIVE) and computerSelection, followed by
//a string that displays the winner and how they won (i.e rock over scissors)

function playRound(computerSelection, playerSelection) {
    let playerChoice = prompt("Make your play");
    let lowercase = playerChoice.toLowerCase();
    if (lowercase !== "rock") {
        console.log("YOU MESSED UP!!!!")
    }
    else{
        console.log("YOU DID IT RIGHT")
    }
    console.log(lowercase)
}
playRound()











