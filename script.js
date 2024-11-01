var humanScore = 0;
var computerScore = 0;

let rock = document.querySelector("#rock");
rock.onclick = (event) => {
    let humanChoice = "rock";
    getComputerChoice();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    var roundResult = playRound(humanChoice,computerChoice);
    document.querySelector("#roundResult").innerText = roundResult;
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    document.querySelector("#score").innerText = "Your score is: " + humanScore;
    if (humanScore > computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "Congratulations! You won the tournament!";
    }
    else if (humanScore < computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "You lost the tournament! Try again?";
    }
    else if (humanScore === computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "The tournament is a draw! Try again?";
    }
};

let paper = document.querySelector("#paper");
paper.onclick = (event) => {
    let humanChoice = "paper";
    getComputerChoice();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    var roundResult = playRound(humanChoice,computerChoice);
    document.querySelector("#roundResult").innerText = roundResult;
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    document.querySelector("#score").innerText = "Your score is: " + humanScore;
    if (humanScore > computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "Congratulations! You won the tournament!";
    }
    else if (humanScore < computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "You lost the tournament! Try again?";
    }
    else if (humanScore === computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "The tournament is a draw! Try again?";
    }
};

let scissors = document.querySelector("#scissors");
scissors.onclick = (event) => {
    let humanChoice = "scissors";
    getComputerChoice();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    var roundResult = playRound(humanChoice,computerChoice);
    document.querySelector("#roundResult").innerText = roundResult;
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    document.querySelector("#score").innerText = "Your score is: " + humanScore;
    if (humanScore > computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "Congratulations! You won the tournament!";
    }
    else if (humanScore < computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "You lost the tournament! Try again?";
    }
    else if (humanScore === computerScore && (humanScore >= 5 || computerScore >= 5)) {
        document.querySelector("#finalScore").innerText = "The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you."
        document.querySelector("#endMessage").innerText = "The tournament is a draw! Try again?";
    }
};

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1) {
        return "rock";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return "paper";
    }
    else return "scissors";
};

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
};