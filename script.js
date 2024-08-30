function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1) {
        return "rock";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return "paper";
    }
    else return "scissors";
}

const computerChoice = getComputerChoice();

function getHumanChoice() {
    let userInput = prompt("Choose your weapon!");
    if (userInput.toLowerCase() === "rock") {
        return "rock";
    }
    else if (userInput.toLowerCase() === "paper") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const humanChoice = getHumanChoice();

var humanScore = 0;

var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        return "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock.";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock.";
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        return "It's a tie!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beat paper.";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors.";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beat paper.";
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "It's a tie!";
    }
}

let roundResult = playRound(humanChoice,computerChoice);

console.log(roundResult);