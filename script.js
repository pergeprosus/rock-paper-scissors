//Pseudocode(?)

//Create a function called getComputerChoice that randomly
//picks between rock paper or scissors. Ensure that the random picking
//system works with consolelogs before making any other portions of the game.

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice(computerSelection) {
    let random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    return computerSelection;
}



function getPlayerChoice(playerSelection) {
    let playerChoice = prompt("Make your play");
    let lowercase = playerChoice.toLowerCase();
    playerSelection = lowercase;
    return playerSelection;
}


// Create a function that actually plays the round. It will include two
//elements called playerSelection (NOT CASE SENSITIVE) and computerSelection, followed by
//a string that displays the winner and how they won (i.e rock over scissors)
let playerPoints = 0;
let computerPoints = 0;
function playRound() {
    let win = "You win this round.";
    let lose = "You lose this round.";
    let draw = "Nobody wins this round."


    //Output for a tie
    if (computerSelection == playerSelection) {
        playerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + draw + "")
        return;
    }
    else;
    //Outputs for rock and scissors
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "")
        return;
    }
    else;

    if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "")
        return;
    }
    else;
    //Outputs for rock and paper
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "")
        return;
    }
    else;

    if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "")
        return;
    }
    else;
    //Outputs for paper and scissors
    if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "")
        return;
    }
    else;

    if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerPoints++;
        console.log("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "")
        return;
    }
    else;
}
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


    for (i = 2; i < 5; i++) {
        playRound();
    }
    if (computerPoints > playerPoints) {
        console.log('YOU LOSE!!!!!!')
    }
    else if (computerPoints == playerPoints)
    {
        console.log('NOBODY WINS!!!!')
    }










