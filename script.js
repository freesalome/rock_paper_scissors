//Step 2
function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (computerChoice <= 0.66) {
        computerChoice = "paper";
        return computerChoice;
    }  
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

//Step 3
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return "rock"
    }
    else if (humanChoice === "paper") {
        return "paper";
    }
    else if (humanChoice === "scissors") {
        return "scissors";
    }
    // else if (humanChoice === null){
    //     return (prompt("Not an option. Pick again.").toLowerCase());
    // }
    else {
        return (prompt("Not an option. Pick again.").toLowerCase());
    }
}

//Step 4
let humanScore = 0;
let computerScore = 0;

//Step 5
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice == "rock") && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if ((humanChoice == "rock") && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if ((humanChoice == "paper") && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if ((humanChoice == "paper") && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if ((humanChoice == "scissors") && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if ((humanChoice == "scissors") && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
}

//Step 6
function playGame() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
}

const i = 0;
while (i === 0) {
    playGame();
    if (humanScore === 3) {
        console.log(`You win! 
            Score: You: ${humanScore} - Computer: ${computerScore}`);
        break;
    }
    else if (computerScore === 3) {
        console.log(`Computer wins. 
            Score: You: ${humanScore} - Computer: ${computerScore}`);
        break;
    }
}


