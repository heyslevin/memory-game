# Planning

## Components

- App
  - Header
    - Score
  - Board
    - Card

## State

- Data in App. Does it pass the state test?
  - High Score :white_check_mark:
  - Current Score :white_check_mark:
  - Original Cards :white_check_mark:
  - Filtered Cards :x:
- Common owner:
  - **App**

## Pseudo Code required

- Generate random cards
  - :white_check_mark: Array with all available cards
  - :white_check_mark: Shuffle Array, and get first 8 values
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
