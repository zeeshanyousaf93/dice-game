let theMsg = document.querySelector('.msg') // .msg <div>
let theFace = document.querySelector('.face') // .face <img>



let rollTheDice = function() {
  // Roll a dice (1-6)
  let diceRoll = getRandomDiceRoll()

  // Update the message
  theMsg.textContent = `You rolled: ${diceRoll}`

  // Update the diceface image
  theFace.setAttribute(`src`, `img/dice${diceRoll}.svg`)
  theFace.setAttribute(`alt`, `Rolled ${diceRoll}`)
}


let theBtn = document.querySelector(`.roll`)  // .roll <button>
theBtn.addEventListener(`click`, rollTheDice)  // Add an event listener

