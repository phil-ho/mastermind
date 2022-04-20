# Mastermind

Mastermind is a code-breaking game where you, the player, tries to guess a secret four-digit code generated by the computer. At the end of each guess, the computer will provide feedback on the the player's guess in the following forms.

The computer will tell the player if:
  1. a correct digit was guessed in the correct spot
  1. a correct digit was guessed but in the wrong spot
  1. an incorrect digit was guessed

**The feedback will *not* reveal which number the player guessed correctly!**

The Player must guess the right number combinations within 10 attempts to win the game.

# Installation

1. `git clone https://github.com/phil-ho/mastermind.git`
1. `cd mastermind`
1. `npm ci`

### to start in dev mode
1. `npm run dev`

### to start in prod
1. `npm run build`
1. `npm start`


# How to Play Mastermind
![Mastermind - Winning](https://media.giphy.com/media/daPxJRIDA6AgGH2eeL/giphy.gif)

1. When the page loads, the game will present "The Rules" dialog explaining how the game works. Click the **New Game** button to begin!
1. The computer will generate the 4-digit secret code (hidden from view) and present a gameboard with 10 empty rows. One for each Turn.
1. Use the Number buttons at the bottom of the screen to create a 4-digit guess. You may edit your guess by clicking the red backspace button.
1. Submit your guess by clicking the green return button.
1. After submitting your guess, the computer will provide feedback to the right of it.
1. Repeat until you guess the secret code and win! Or run out of turns and lose!


# Features
Core:
- ✅ Ability to guess the combinations of 4 numbers
- ✅ Ability to view the history of guesses and their feedback
- ✅ The number of guesses remaining is displayed
- ✅ Uses [Random generator API](https://www.random.org/clients/http/api/) to randomly select 4 numbers from 0 ~ 7 (Duplicate numbers are allowed)

Extra:
- 📱 Mobile first design
- 👍 on-screen "keyboard" provides a straightforward UI that doesn't need a lot of explanation.
- 🧐 Results Modal presents at the end to reveal the Secret Code and number of Turns taken by player.
- ❓ Clicking the title, Mastermind, or the question mark besides it brings up the Rules modal at any time, allowing the Player to review the rules or restart the game.



# Process

## Storybook 📒
Storybook is a tool I used for building the UI components in isolation. I like how it allows me to focus on the individual component and its interface. In the component library you can view the components, their variants, and even change their props and see the changes live.

To start storybook:
```
npm run storybook
```

## Tests 🧪
I used Jest & Testing-Library to do my unit testing.

To run tests:
```
npm run test
```

# Wishlist 🌈
1. Sharing the results with other people
1. automatically focus on the current guess
1. feature: option to make game easier by only allowing unique numbers in the secret code (no duplicates)
1. hide keyboard when not `isPlaying`
1. capture keyboard input for PC keyboard players
