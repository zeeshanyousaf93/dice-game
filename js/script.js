// Search for the .msg
let theMsg = document.querySelector('.msg')
// Search for the .face <img>
let theFace = document.querySelector('.face')
// Search for the .dice <div>
// let theDice = document.querySelector('.dice')


let rollTheDice = function() {

  // Roll a dice... we got 5
  let diceRoll = getRandomDiceRoll()

  // Replace the textContent with "You rolled: 4"
  theMsg.textContent = `You rolled: ${diceRoll}`


  // OPTION 1:
  // Replace the src attribute with "img/dice4.svg"
  theFace.setAttribute(`src`, `img/dice${diceRoll}.svg`)

  // Replace the alt attribute with "Rolled 4"
  theFace.setAttribute(`alt`, `Rolled ${diceRoll}`)

  /*
  // OPTION 2:
 
  // Replace the innerHTML <img> with a new <img>
  theDice.innerHTML = `<img src="img/dice${diceRoll}.svg" alt="Rolled ${diceRoll}" class="face">`
  */
}


let theBtn = document.querySelector(`.roll`)

// EVENT: Something that happens (for example: click)
// EVENT LISTENER: When an event occurs, here's what we need to do

// Where will this event occur?      theBtn (.roll)
// What type of event will it be?    `click`
// What do we do, when it occurs?    rollTheDice

theBtn.addEventListener(`click`, rollTheDice)

















// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
