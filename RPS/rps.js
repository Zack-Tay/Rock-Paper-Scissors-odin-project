const options = ["rock", "paper", "scissors"];

// function declaration to get a random option from the computer
const computerSelection = function computerPlay() {
    let index = Math.floor(Math.random() * 2.99);
    const computerChoice = options[index];
    return computerChoice;
}

const playerSelection = "rock";
// prompting the player to input an option rock paper or scissor
// if none of the above, will return error

//const errorMessage = "ERROR, please input a valid option";
//const playerSelection = prompt("Please input your option:");

function game() {
    // we have to define a score counter for both player and computer
    let playerScore = 0;
    let computerScore = 0;
    let tieGame = 0;
    let round = 0;

    // play 5 rounds
    // keep track of total number of rounds play
    // stop at round 5
    while (round < 5) {
        round++;
    // count total score
    // increment score accordingly when either of them wins
        function playRound(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                const tie = "It's a tie, play again"
                tieGame++;
                return tie;
            } else if ((playerChoice === "rock" && computerChoice === "paper") || 
            (playerChoice === "scissors" && computerChoice === "rock") || 
            (playerChoice === "paper" && computerChoice === "scissors")) {
                const loser = `You lose! ${computerChoice} beats ${playerChoice}`;
                computerScore++;
                return loser;
            } else {
                const winner = `You win! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
                return winner;
            }
        }
        playRound(playerSelection, computerSelection());
    } 
    // at the end, compare the score between the 2, and see whos the winner
    // if there is a draw, then end in a draw, if not print the winner.
    // log out the result of each round
    function gameChecker(playerResult, computerResult) {
        if (playerResult > computerResult) {
            return "player is the winner!"
        } else if (computerResult > playerResult) {
            return "computer is the winner!";
        } else {
            return "it is a tie, play another 5 rounds to decide the game";
        }
    }
    console.log(`player's final score: ${playerScore}`);
    console.log(`computer's final score: ${computerScore}`);
    console.log(gameChecker(playerScore, computerScore));
}

game();
