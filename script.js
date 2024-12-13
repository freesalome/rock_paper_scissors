function getComputerChoice() {
    const x = Math.random();
    if (x <= 0.33)
        return "rock";
    else if (x <= 0.66)
        return "paper";
    else 
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score')

function playRound(humanChoice, computerChoice) {
    const winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    const tieMessage = "It's a tie!";

    const p = document.createElement('p');

    if(humanChoice === computerChoice) {
        // const p = document.createElement('p');
        p.innerText = `${tieMessage}`;
        console.log(tieMessage);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        // const p = document.createElement('p');
        pScore.innerText = `Player Score: ${humanScore}`;
        p.innerText = `${winMessage}`;
        console.log(winMessage);
    }
    else {
        computerScore++;
        cScore.innerText = `Computer Score: ${computerScore}`;
        // const p = document.createElement('p');
        p.innerText = `${loseMessage}`;
        console.log(loseMessage);
    }
    outcomeDiv.appendChild(p);
    const h2 = document.createElement('h2');
    if(humanScore ==  5){
        h2.innerText = `You win. Score ${humanScore} - ${computerScore}`;
        outcomeDiv.appendChild(h2);
        endGame();
    }
    if(computerScore == 5){
        h2.innerText = `Computer wins. Score ${humanScore} - ${computerScore}`;
        outcomeDiv.appendChild(h2);
        endGame();
    }   
}

function countScore() {

}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    function playAgain() {
        const retryButton = document.createElement('button');
        retryButton.textContent = 'Play Again';
        retryButton.addEventListener('click', () => {
            window.location.reload();
        });
        outcomeDiv.appendChild(retryButton);
    }
    playAgain();
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});



// function playGame() {
//     // for (let i = 0; i < 5; i++) {
//     //     const humanChoice = getHumanChoice();
//     //     const computerChoice = getComputerChoice();
//     //     playRound(humanChoice, computerChoice);
//     // }

//     if (humanScore > computerScore) {
//         console.log(`You won the game! Final score: ${humanScore}-${computerScore}`);
//     } else if (humanScore < computerScore) {
//         console.log(`You lost the game! Final score: ${humanScore}-${computerScore}`);
//     } else {
//         console.log(`It's a tie. Final score: ${humanScore}-${computerScore}`);
//     }
// }
// playGame();