let theMsg = document.querySelector('.msg') // .msg <div>
let theFace = document.querySelector('.face') // .face <img>



let rollTheDice = function() {
  // Roll a dice (1-6)
  let diceRoll = getRandomDiceRoll()
  let rollInWords = ``

  // There are 6 cases
  if (diceRoll === 1) {
    rollInWords = `one`
  } else if (diceRoll === 2) {
    rollInWords = `two`
  } else if (diceRoll === 3) {
    rollInWords = `three`
  } else if (diceRoll === 4) {
    rollInWords = `four`
  } else if (diceRoll === 5) {
    rollInWords = `five`
  } else if (diceRoll === 6) {
    rollInWords = `six`
  } else {
    console.error(`Woops! Something went wrong`)
  }

  // Update the message
  theMsg.textContent = `You rolled: ${rollInWords}`

  // Update the diceface image
  theFace.setAttribute(`src`, `img/dice${diceRoll}.svg`)
  theFace.setAttribute(`alt`, `Rolled ${diceRoll}`)
}


let theBtn = document.querySelector(`.roll`)  // .roll <button>
theBtn.addEventListener(`click`, rollTheDice)  // Add an event listener



// Roll two dice
// 






/* 
// Boolean: true or false (binary)
let youUnderstandThisConcept = true

if (1 > 2) {
  // this will always run
} else { 
  // this will never run
}
 */

// Comparison operators: always result in true or false
// > >= < <=
// === exactly equal to (hard comparison)
// == somewhat equal to (soft comparison)

// if statement only: runs the block, or skips over it
// if and else: runs one block, or the other


