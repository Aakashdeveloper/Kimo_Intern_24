import random

max_number = 50
attempts = 5

target_number = random.randint(1,max_number)
print(f"\n Guess the number between 1 and {max_number}. You have {attempts} attempts.")

while attempts > 0:
    guess = int(input("Enter Your guess: "))

    if guess < target_number:
        print("Too Low!")
    elif guess > target_number:
        print("Too High")
    else:
        print("Congratulations! You've guessed the number")
        break

    attempts -= 1
    print(f"You have {attempts} attempts left")

if attempts == 0:
    print(f"Sorry, you've used all your attempts. The correct number was {target_number}.")




