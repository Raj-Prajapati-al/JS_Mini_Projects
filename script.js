// script.js

// Initialize the game
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get elements from DOM
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');

// Function to handle the guess
function handleGuess() {
  const userGuess = parseInt(guessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageDiv.textContent = "Please enter a number between 1 and 100.";
    messageDiv.style.color = "red";
    return;
  }
  
  attempts++;
  
  if (userGuess === targetNumber) {
    messageDiv.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    messageDiv.style.color = "green";
    resetGame();
  }
  if(attempts == 10)
  {
    messageDiv.innerHTML = `Bad Luck! Only 10 Attempts Allowed!<br>Original Number : ${targetNumber}`;
    resetGame();
  } 
  else if (userGuess < targetNumber) {
    messageDiv.textContent = "Too low! Try again.";
    messageDiv.style.color = "orange";
  } else {
    messageDiv.textContent = "Too high! Try again.";
    messageDiv.style.color = "orange";
  }
  
  attemptsDiv.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
}

// Function to reset the game
function resetGame() {
  setTimeout(() => {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDiv.textContent = `Attempts: ${attempts}`;
    messageDiv.textContent = "Guess a number between 1 and 100!";
  }, 3000);
}

// Event listener for the submit button
submitButton.addEventListener('click', handleGuess);

// Allow the user to press "Enter" to submit their guess
guessInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleGuess();
  }
});
