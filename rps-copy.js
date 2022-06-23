const options = ["rock", "paper", "scissors"];

// function declaration to get a random option from the computer
function computerPlay() {
    let index = Math.floor(Math.random() * 2.99);
    const computerChoice = options[index];
    return computerChoice;
};

function game() {
    // we have to define a score counter for both player and computer
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    let tieGame = 0;

    // creating a div container to store all the results
    const container = document.querySelector('#container');
    const resultDiv = document.createElement('p');
    resultDiv.style.marginTop = "20px";
    container.appendChild(resultDiv);

    // playerWintext
    const playerWin = document.createElement('p');
    playerWin.style.color = 'black';
    playerWin.textContent = `Player's Current Score: ${playerScore}`;
    resultDiv.appendChild(playerWin);

    // computerwintext
    const computerWin = document.createElement('p');
    computerWin.style.color = 'black';
    computerWin.textContent = `Computer's Current Score: ${computerScore}`;
    resultDiv.appendChild(computerWin);

    // battlewintext
    const battleWin = document.createElement('p');
    battleWin.style.color = 'black';
    resultDiv.appendChild(battleWin);

    // gamewintext after 5 rounds
    const gameWin = document.createElement('p');
    gameWin.style.fontWeight = 'strong';
    gameWin.style.fontSize = '50px';
    gameWin.textContent = gameWinner;
    resultDiv.appendChild(gameWin);

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            const tie = "It's a tie, play again";
            tieGame++;
            return tie;
        } else if ((playerChoice === "rock" && computerChoice === "paper") || 
        (playerChoice === "scissors" && computerChoice === "rock") || 
        (playerChoice === "paper" && computerChoice === "scissors")) {
            const loser = `Computer wins! ${computerChoice} beats ${playerChoice}`;
            computerScore++;
            return loser;
        } else {
            const winner = `Player wins! ${playerChoice} beats ${computerChoice}`;
            playerScore++;
            return winner;
        }
    }

    // create buttons for player to click to make choice selection
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWin.textContent = playRound(playerSelection, computerSelection);
            playerWin.textContent = `Player's Current Score: ${playerScore}`;
            computerWin.textContent = `Computer's Current Score: ${computerScore}`;
            gameChecker(playerScore, computerScore);
        })
    });

    // play 5 rounds
    function gameChecker(playerResult, computerResult) {
        if (playerResult == '5') {
            gameWinner = 'Player is the Winner!';
            gameWin.textContent = gameWinner;
        } else if (computerResult == '5') {
            gameWinner = 'Computer is the Winner!';
            gameWin.textContent = gameWinner;
        }
    };
}

game();