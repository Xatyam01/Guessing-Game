const winSound = new Audio('win.mp3');
let secretNumber;
let attemptsLeft;
let totalAttempts;

function startGame() {
    const lowerInput = document.getElementById('lower-bound');
    const upperInput = document.getElementById('upper-bound');
    const resultMessage = document.getElementById('result-message');
    const attemptCount = document.getElementById('attempt-count');

    const x = parseInt(lowerInput.value);
    const y = parseInt(upperInput.value);

    // Validate input
    if (isNaN(x) || isNaN(y) || x >= y) {
        resultMessage.textContent = "Please enter a valid lower and upper bound (lower < upper).";
        return;
    }

    // Generate secret number
    secretNumber = Math.floor(Math.random() * (y - x + 1)) + x;

    // Calculate allowed attempts
    totalAttempts = Math.floor((y - x + 2) / 2);
    attemptsLeft = totalAttempts;

    // Reset messages and attempt count
    resultMessage.textContent = `Game started! Guess a number between ${x} and ${y}.`;
    attemptCount.textContent = totalAttempts;
    document.getElementById('guess').value = '';
}

function makeGuess() {
    const guessInput = document.getElementById('guess');
    const resultMessage = document.getElementById('result-message');
    const attemptCount = document.getElementById('attempt-count');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        resultMessage.textContent = "Please enter a valid number.";
        return;
    }

    if (attemptsLeft <= 0) {
        resultMessage.textContent = `No attempts left! The number was ${secretNumber}.`;
        return;
    }

    attemptsLeft--;

    if (guess === secretNumber) {
        resultMessage.textContent = "Hooray! You guessed the correct number!";
        winSound.play();
        confetti({        // 🎉 Confetti animation
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        attemptCount.textContent = totalAttempts - attemptsLeft;
    } else if (guess < secretNumber) {
        resultMessage.textContent = `It's higher!`;
    } else {
        resultMessage.textContent = `It's lower!`;
    }

    attemptCount.textContent = totalAttempts - attemptsLeft;

    if (attemptsLeft === 0 && guess !== secretNumber) {
        resultMessage.textContent = `Better luck next time! The correct number was ${secretNumber}.`;
    }

    guessInput.value = '';
}
