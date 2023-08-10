function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function displayResult(result) {
    const div = document.getElementById('result');
    div.innerHTML = result;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        //console.log("You Win! Rock beats Scissors");
        result = "You Win! Rock beats Scissors";
        displayResult(result);
        return true;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock";
        displayResult(result);
        return false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock";
        displayResult(result);
        return true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper";
        displayResult(result);
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
        displayResult(result);
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper";
        displayResult(result);
        return true;
    } else {
        result = `It's a Draw! You both selected ${playerSelection}`;
        displayResult(result);
        return -1;
    }    
}

function updateScore(player, computer) {
    const div = document.getElementById("score");
    div.innerText = `player score: ${player}  computer score: ${computer}`;
}

function updateRound(round) {
    const div = document.getElementById("round");
    div.innerText = `round: ${round}`
}

let countPlayer = 0;
let countComputer = 0;

let round = 1;
updateRound(round);
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {    
    btn.addEventListener("click", (e) => {        
        const computerSelection = getComputerChoice();
        let result = playRound(btn.innerText, computerSelection);
        if (result === true) countPlayer++;
        else if (result === false) countComputer++;        
        updateScore(countPlayer, countComputer);
        if (round >= 5) {
            let str = '';
            if (countPlayer > countComputer) {
                str += "Congratulations! You Won the game";
            } else if (countComputer > countPlayer) {
                str += "You Lost the game!";
            } else {
                str += "The game was a Draw";
            }
            const div = document.createElement('div');
            div.innerText = str;
            const body = document.querySelector("body");
            body.appendChild(div);
            round = 0;
        }    
        round++;    
        updateRound(round);
    });      
});
