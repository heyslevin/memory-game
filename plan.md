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
    - :white_check_mark: const shuffled = [...array].sort(() => 0.5 - Math.random())
- :white_check_mark: Click on card checks if card has been clicked before
  - :white_check_mark: new "selected" array
  - :white_check_mark: Card element is passed a card
  - :white_check_mark: onclick check includes: selectedArray.includes(clickedItem)
  - :white_check_mark: If false:
    - :white_check_mark: onclick push item into selected array
    - :white_check_mark: score++
    - :white_check_mark: generateRandomCards() // Aka play again
  - If true:
    - :white_check_mark: alert("Game over")
    - :white_check_mark: if score > highscore, highscore = score
    - :white_check_mark: generateRandomCards() // Aka play again in useEffect
