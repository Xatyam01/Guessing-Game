# Number Guessing Game

A simple interactive number guessing game built as a web app using HTML, CSS, and JavaScript — with animations and sound effects!  
Also included is a Python console version of the same guessing game.

---

## Features

- User inputs **lower** and **upper bounds** to define the guessing range.
- Random number generated between bounds.
- Number of allowed guesses is `floor((upper - lower + 2) / 2)`.
- User guesses the number within the allowed attempts.
- After each guess, hints are given:
  - "It's higher!" if the guess is too low.
  - "It's lower!" if the guess is too high.
- Winning triggers:
  - A **confetti animation** on screen.
  - A **winning sound effect** plays.
- Clear messages and attempt counter displayed.
- Responsive and clean UI with white glowing box shadow effect on the main game container.

---

## File Overview

| File          | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `index.html`  | Main HTML page containing the structure of the game UI with input fields and buttons.         |
| `style.css`   | Styling for the game UI including layout, colors, fonts, and glowing box shadow effects.      |
| `script.js`   | JavaScript logic handling game initialization, guess evaluation, sound effects, and confetti. |
| `win.mp3`     | Audio file that plays when the user wins the game.                                            |
| `app.py`      | Python console version of the guessing game with similar logic and user input in terminal.    |

---

## How to Run

### Web App
1. Open `index.html` in any modern web browser.
2. Enter lower and upper bounds, then click **Start Game**.
3. Enter your guesses and click **Guess**.
4. Follow the hints until you win or run out of attempts.

### Python Version
1. Make sure you have Python installed (Python 3 recommended).
2. Run the Python script from your terminal or command prompt:
   ```bash
   python guessing_game.py
