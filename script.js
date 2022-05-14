let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, winningNumber) => {
    if (Math.abs(humanGuess - winningNumber) < Math.abs(computerGuess - winningNumber) || Math.abs(humanGuess - winningNumber) === Math.abs(computerGuess - winningNumber)) {
        return true;
    } else  {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        return 'Error'
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

const getAbsoluteDistance = () => {
   
}