//DOM connections
let resoot = document.getElementById("resultslist");

let buttons = document.querySelectorAll('.button');

let pointPlayer = document.getElementById("youscorenumber");

let pointComputer = document.getElementById("botscorenumber");

let roond = document.getElementById("round");

let wonner = document.getElementById("winner");






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
pointPlayer.innerHTML = (" " + playerPoints + "");
pointComputer.innerHTML = (" " + computerPoints + "");
function playRound(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e;
    let win = "You win this round.";
    let lose = "You lose this round.";
    let draw = "Nobody wins this round."
    //Output for a tie
    if (computerPoints < 5 && playerPoints < 5) {


        if (computerSelection == playerSelection) {
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + draw + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            sad.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")
                return;
            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");
                return;
            }
            return;
        }
        else;
        //Outputs for rock and scissors
        if (computerSelection == 'rock' && playerSelection == 'scissors') {
            computerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            sad.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")
                return;
            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");
                return;
            }
            return;
        }
        else;
        if (computerSelection == 'scissors' && playerSelection == 'rock') {
            playerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            ding.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")
                return;
            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");
                return;
            }
            return;
        }
        else;
        //Outputs for rock and paper
        if (computerSelection == 'rock' && playerSelection == 'paper') {
            playerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            ding.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")

            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");

            }
            return;
        }

        else;
        if (computerSelection == 'paper' && playerSelection == 'rock') {
            computerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            sad.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")

            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");

            }
            return;
        }
        else;
        //Outputs for paper and scissors
        if (computerSelection == 'paper' && playerSelection == 'scissors') {
            playerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + win + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            ding.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")

            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");
            }
            return;
        }
        else;
        if (computerSelection == 'scissors' && playerSelection == 'paper') {
            computerPoints++;
            resoot.innerHTML = ("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". " + lose + "");
            round++;
            roond.innerHTML = ("" + round + "");
            pointPlayer.innerHTML = (" " + playerPoints + "");
            pointComputer.innerHTML = (" " + computerPoints + "");
            sad.play();
            if (computerPoints == 5 && playerPoints < computerPoints) {
                wonner.innerHTML = ("YOU LOSE!!! YOU SUCK!!!!");
                //console.log("You won " + playerPoints + " rounds, and the computer won " + computerPoints + " rounds. " + result + "")
            }
            if (playerPoints == 5 && computerPoints < playerPoints) {
                wonner.innerHTML = ("YOU WIN!!! YOU RULE!!!!");
            }
            return;
        }
        else return;
    }
    //if (computerPoints > 5 && playerPoints < computerPoints || playerPoints > 5 && computerPoints < playerPoints)
    // return 'poop';
}
// Give definitions to the parameters which execute the functions to obtain each number














