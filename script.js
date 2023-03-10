console.log("Hello World!");


function getPlayerChoice() {
  playerPrompt = prompt("Choose Paper, Rock or Scissors");
  return playerPrompt;

}
// function that picks the computers choice

function getComputerChoice() {
  let computerChoice;
  let options = ["rock", "paper", "scissors"];

  computerChoice = options[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//console.log(getComputerChoice());

// function to play a round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  let result;
  console.log("player chose: " + playerSelection);
  console.log("computer chose: " + computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result = "You win";
    } else if (playerSelection === computerSelection) {
      result = "It's a draw";
    } else {
      result = "You lose";
    }
  console.log(result); 
  return result;
}



function game() {
  let roundNumber = 0;
  let roundResult;
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    roundResult = playRound(getPlayerChoice(), getComputerChoice());
    roundNumber++;
    if (roundResult === 'You win') {
      playerScore++;
    } else if ( roundResult === 'You lose') {
      computerScore++;
    }

      if (roundNumber === 5) {
        if (computerScore > playerScore) {
          console.log('YOU LOST THE GAME')
        } else if (playerScore > computerScore) {
          console.log('YOU WON THE GAME')
        } else {
          console.log("It's a draw")
        }
      }

    console.log('This round number: ' + roundNumber)
    console.log('Player score is: ' + playerScore);
    console.log('Computer score is: ' + computerScore);
    

  }
}

game();
