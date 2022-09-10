let resoot = document.getElementById("resultslist");

let buttons = document.querySelectorAll('.button');

let pointPlayer = document.getElementById("youscorenumber");

let pointComputer = document.getElementById("botscorenumber");

let roond = document.getElementById("round");







//Pseudocode(?)
//Create a function called getComputerChoice that randomly
//picks between rock paper or scissors. Ensure that the random picking
//system works with consolelogs before making any other portions of the game.
let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(computerSelection) {
    let random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    return computerSelection;
}
function getPlayerChoice(playerSelection) {
    playerSelection = 'rock'
    return playerSelection;
}

// Create a function that actually plays the round. It will include two
//elements called playerSelection (NOT CASE SENSITIVE) and computerSelection, followed by
//a string that displays the winner and how they won (i.e rock over scissors)
let round = 1;
let playerPoints = 0;
let computerPoints = 0;
roond.innerHTML = ("" + round + "");
function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let win = "You win this round.";
    let lose = "You lose this round.";
    let draw = "Nobody wins this round."
    //Output for a tie
    if (computerSelection == playerSelection) {
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + draw + "");
        playerPoints++;
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    //Outputs for rock and scissors
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    //Outputs for rock and paper
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    //Outputs for paper and scissors
    if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
    if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerPoints++;
        resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
        round++;
        roond.innerHTML = ("" + round + "");
        return;
    }
    else;
}
// Give definitions to the parameters which execute the functions to obtain each number
function game() {
    playRound();
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    let win = "You win!";
    let lose = "You lose!";
    let result;
    if (computerPoints > playerPoints) {
        result = lose;
    }
    else if (playerPoints > computerPoints) {
        result = win;
    }
    console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")
}
pointPlayer.innerHTML = (" " + playerPoints + "");
pointComputer.innerHTML = (" " + computerPoints + "");












