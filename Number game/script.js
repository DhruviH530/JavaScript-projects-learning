const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');  
const guessInput = document.getElementById('guess');
const message = document.getElementById('message');

let randomNumber = Math.floor(Math.random() * 100) + 1; 

submitBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (userGuess === randomNumber) {
        message.textContent = 'Correct! You win!';
        message.style.color = 'green';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'darkred';
    }
});

resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    guessInput.value = ''; 
    message.textContent = ''; 
});
