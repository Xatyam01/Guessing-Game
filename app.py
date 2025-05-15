import random
import math

def guessing_game():
    # Get user-defined limits
    x = int(input("Enter the lower limit: "))
    y = int(input("Enter the upper limit: "))

    # Validate limits
    if x >= y:
        print("Please give a valid range where the lower limit is less than the upper limit.")
        return

    # Generate random number
    token = random.randint(x, y)

    # Calculate allowed number of guesses
    no_of_guess = math.floor((y-x) / 2)
    print(f"You have {no_of_guess} guesses to find the number between {x} and {y}.")

    for attempt in range(1, no_of_guess + 1):
        guess = int(input(f"Guess {attempt}: "))

        if guess == token:
            print("Hooray! You guessed it!")
            return
        elif guess < token:
            print("It's higher.")
        else:
            print("It's lower.")

    print(f"Better luck next time. The correct number was {token}.")

# Run the game
guessing_game()
