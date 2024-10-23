let rock = document.querySelector("#rock");
rock.onclick = (event) => {
    let humanChoice = "rock";
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
    playRound(humanChoice, computerChoice);
    var humanScore = 0;
    var computerScore = 0;
    var roundResult = playRound(humanChoice,computerChoice);
    console.log(roundResult);
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    console.log("Your score is: " + humanScore);
    console.log("The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you.");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game! Try again?")
    }
    else {
        console.log("The game is a draw! Try again?")
    }
};

let paper = document.querySelector("#paper");
paper.onclick = (event) => {
    let humanChoice = "paper";
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
    playRound(humanChoice, computerChoice);
    var humanScore = 0;
    var computerScore = 0;
    var roundResult = playRound(humanChoice,computerChoice);
    console.log(roundResult);
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    console.log("Your score is: " + humanScore);
    console.log("The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you.");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game! Try again?")
    }
    else {
        console.log("The game is a draw! Try again?")
    }
};

let scissors = document.querySelector("#scissors");
scissors.onclick = (event) => {
    let humanChoice = "scissors";
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
    playRound(humanChoice, computerChoice);
    var humanScore = 0;
    var computerScore = 0;
    var roundResult = playRound(humanChoice,computerChoice);
    console.log(roundResult);
    if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beat paper." || roundResult === "You lose! Rock beats scissors.") {
        computerScore ++;
    }
    else if (roundResult === "You win! Paper beats rock." || roundResult === "You win! Scissors beat paper." || roundResult === "You win! Rock beats scissors.") {
        humanScore ++;
    }
    console.log("Your score is: " + humanScore);
    console.log("The final scores are " + computerScore + " points for the computer and " + humanScore + " points for you.");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game! Try again?")
    }
    else {
        console.log("The game is a draw! Try again?")
    }
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
}

// everything under here makes additional rounds happen - but how do I wrap the playGame function around the above
// stuff to clean up the code?

/* var computerChoice = getComputerChoice();
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
console.log("Your score is: " + humanScore);*/