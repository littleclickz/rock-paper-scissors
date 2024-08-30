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

var computerChoice = getComputerChoice();

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

var humanChoice = getHumanChoice();

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

var roundResult = playRound(humanChoice,computerChoice);

console.log(roundResult);

if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
    computerScore ++;
}
else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
    humanScore ++;
}

console.log("Your score is: " + humanScore);

// everything under here makes additional rounds happen - but how do I wrap the playGame function around the above
// stuff to clean up the code?

var computerChoice = getComputerChoice();
var humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
var roundResult = playRound(humanChoice,computerChoice);
console.log(roundResult);
if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
    computerScore ++;
}
else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
    humanScore ++;
}
console.log("Your score is: " + humanScore);


var computerChoice = getComputerChoice();
var humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
var roundResult = playRound(humanChoice,computerChoice);
console.log(roundResult);
if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
    computerScore ++;
}
else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
    humanScore ++;
}
console.log("Your score is: " + humanScore);


var computerChoice = getComputerChoice();
var humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
var roundResult = playRound(humanChoice,computerChoice);
console.log(roundResult);
if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
    computerScore ++;
}
else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
    humanScore ++;
}
console.log("Your score is: " + humanScore);


var computerChoice = getComputerChoice();
var humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
var roundResult = playRound(humanChoice,computerChoice);
console.log(roundResult);
if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
    computerScore ++;
}
else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
    humanScore ++;
}
console.log("Your score is: " + humanScore);


if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!")
}
else if (humanScore < computerScore) {
    console.log("You lost the game! Try again?")
}
else {
    console.log("The game is a draw! Try again?")
}