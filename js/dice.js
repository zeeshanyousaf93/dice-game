// This function returns a random Number between/including 1 and "sides" (defaults to 6)
let getRandomDiceRoll = function(sides = 6) {
  return Math.floor( Math.random() * sides ) + 1
}
