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

let computerChoice = getComputerChoice();

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

let humanChoice = getHumanChoice();