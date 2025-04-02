function getComputerChoice() {
    let computerChoice;
    let randomOneToThree = Math.floor(Math.random() * 3);
    if (randomOneToThree == 0) {computerChoice = "rock"}
    else if (randomOneToThree == 1) {computerChoice = "paper"}
    else {computerChoice = "scissors"}
    return computerChoice
}

function getUserChoice() {
    let choice = "not chosen yet";
    while (choice != "rock" && choice != "paper" && choice != "scissors")
        choice = (prompt(`Please choose 'rock', 'paper' or 'scissors'`)).toLowerCase()
    return choice
}

function play(UserChoice,ComputerChoice){
    let outcome;
    if (UserChoice == "rock" && ComputerChoice == "rock" || UserChoice == "paper" && ComputerChoice == "paper" || UserChoice == "scissors" && ComputerChoice == "scissors"){
        outcome = "draw"
    }

    else if (UserChoice == "rock" && ComputerChoice == "scissors" || UserChoice == "paper" && ComputerChoice == "rock" || UserChoice == "scissors" && ComputerChoice == "paper"){
        outcome = "win"
    }
    
    else if (UserChoice == "rock" && ComputerChoice == "paper" || UserChoice == "paper" && ComputerChoice == "scissors" || UserChoice == "scissors" && ComputerChoice == "rock"){
        outcome = "lose"
    }
    return outcome
}

function game(rounds) {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; (i < rounds); i++){
    outcome = play(getComputerChoice(),getUserChoice());
    if (outcome == "win"){
        userScore++;
    }
    else if (outcome == "lose"){
        computerScore++
    }
    
    console.log(`You ${outcome}! Your score is ${userScore} and the computers score is ${computerScore}`)
    }
    if (userScore > computerScore){
        console.log(`You win the game! Your score is ${userScore} and the computers score is ${computerScore}`)
    }
    else if (userScore == computerScore){
        console.log(`The game's a draw! Your score is ${userScore} and the computers score is ${computerScore}`)
    }
    else{
        console.log(`You lose the game! Your score is ${userScore} and the computers score is ${computerScore}`)
    }
}
game(3)