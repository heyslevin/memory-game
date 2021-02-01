# Planning

## Components

- Header
  - High Score
  - Current Score
- Board
  - Card

## State

- Data in App
  - High Score :white_check_mark:
  - Current Score :white_check_mark:
  - Original Cards :white_check_mark:
  - Filtered Cards :x:

## Pseudo Code required

- Generate random cards while
  - Array with all available cards
  - Shuffle Array, and get first 8 values
    - const shuffled = [...array].sort(() => 0.5 - Math.random())
- Click on card checks if card has been clicked before
  - new "selected" array
  - onclick check includes: selectedArray.includes(clickedItem)
  - If false:
    - onclick push item into selected array
    - score++
    - generateRandomCards() // Aka play again
  - If true:
    - alert("Game over")
    - if score > highscore, highscore = score
    - generateRandomCards() // Aka play again
