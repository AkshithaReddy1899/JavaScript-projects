const start = document.getElementById("start");
const game = document.querySelector(".game");

const randomNumber = Math.floor(Math.random() * 100);
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const prevGuessList = document.getElementById("prevGuess");
const prevGuessLabel = document.getElementById("prevGuessLabel");
const restart = document.getElementById("restart");
let guessCount = 0;


start.addEventListener('click', startGame);

function startGame() {
    game.style.display = 'block';
    start.style.display = 'none';
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

submit.addEventListener('click', validation);

function validation() {
    const playerGuess = Number(document.getElementById("guess").value);
    guessCount++;

    if (playerGuess === "") {
        hint.textContent = "Please enter a valid number";
    } else if (playerGuess === randomNumber) {
        hint.textContent = 'Congratulations! You guessed it right.';
    } else if (playerGuess > randomNumber) {
        hint.textContent = 'Your guess is high';
    } else if (playerGuess < randomNumber) {
        hint.textContent = 'Your guess is low';
    }

    prevGuessList.textContent += playerGuess + ' ';
    if (guessCount === 10) {
        restart.style.display = "block";
        game.style.display = "none";
        document.getElementById('gameOver').textContent = "Game over! Try again";
    }
}

function reload() {
    history.go(0);
}