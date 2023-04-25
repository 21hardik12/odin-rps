function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        //console.log("You Win! Rock beats Scissors");
        result = "You Win! Rock beats Scissors";
        console.log(result);
        return true;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock";
        console.log(result);
        return false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock";
        console.log(result);
        return true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper";
        console.log(result);
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
        console.log(result);
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper";
        console.log(result);
        return true;
    } else {
        result = `It's a Draw! You both selected ${playerSelection}`;
        console.log(result);
        return -1;
    }    
}

function game() {
    let countPlayer = 0;
    let countComputer = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        const playerSelection = prompt("Enter your selection:");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === true) countPlayer++;
        else if (result === false) countComputer++;    
    }    
    if (countPlayer > countComputer) {
        console.log("Congratulations! You Won the game");
    } else if (countComputer > countPlayer) {
        console.log("You Lost the game!");
    } else {
        console.log("The game was a Draw");
    }
}

game();
