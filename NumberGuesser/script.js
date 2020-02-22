let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget() = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber; 
}

const compareGuesses() = (userGuess,computerGuess,targetNumber) => {
if (Math.abs(userGuess-targetNumber)>Math.abs(computerGuess-targetNumber)) {
  return false;
} else if (Math.abs(userGuess-targetNumber)<Math.abs(computerGuess-targetNumber)) {
  return true;
} else {
  return true;
}
}

const updateScore = score => {
  if (score === "human") {
    humanScore ++; 
  } else if (score === "computer") {
    computerScore ++;
  }
}

const advanceRound = () => 
  currentRoundNumber ++;


