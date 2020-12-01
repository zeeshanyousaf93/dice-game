let theMsg = document.querySelector('.msg') // .msg <div>
let dice1 = document.querySelector('#d1') // <img>
let dice2 = document.querySelector('#d2') // <img>



let rollTheDice = function() {
  // Roll a dice (1-6)
  let diceRoll1 = getRandomDiceRoll()
  let diceRoll2 = getRandomDiceRoll()

  let diceSum = diceRoll1 + diceRoll2
  let crapsMsg = ``

  // WORK ON THAT UNTIL 10:30

/*   if (diceSum === 2) {
    crapsMsg = `Snake Eyes`
  } else if (diceSum === 3) {
    crapsMsg = `Ace Deuce`
  } else if (diceSum === 4) {
    crapsMsg = `Easy Four`
    if (diceRoll1 === diceRoll2) {
      crapsMsg = `Hard Four`
    }
  } else if (diceSum === 5) {
    crapsMsg = `Fever Five`
  } else if (diceSum === 6 && diceRoll1 === diceRoll2) {
    crapsMsg = `Hard Six`
  } else if (diceSum === 6) {
    crapsMsg = `Easy Six`
  } else if (diceSum === 7) {
    crapsMsg = `Natural`
  } else if (diceSum === 8 && diceRoll1 === diceRoll2) {
    crapsMsg = `Hard Eight`
  } else if (diceSum === 8) {
    crapsMsg = `Easy Eight`
  } else if (diceSum === 9) {
    crapsMsg = `Nina Nine`
  } else if (diceSum === 10 && diceRoll1 === diceRoll2) {
    crapsMsg = `Hard Ten`
  } else if (diceSum === 10) {
    crapsMsg = `Easy Ten`
  } else if (diceSum === 11) {
    crapsMsg = `Yo-leven`
  } else if (diceSum === 12) {
    crapsMsg = `Boxcar`
  } else {
    crapsMsg = `Woops, something went wrong`
  }
 */

  let prefix = ``
  let wordNum = ``

  console.log(diceSum)

  if (diceRoll1 === diceRoll2 && diceSum !== 2 && diceSum !== 12) {
    prefix = `Hard`
  } else if (diceSum === 4 || diceSum === 6 || diceSum === 8 || diceSum === 10 ) {
    prefix = `Easy`
  }


  if (diceSum === 2) {
    wordNum = `Snake Eyes`
  } else if (diceSum === 3) {
    wordNum = `Ace Deuce`
  } else if (diceSum === 4) {
    wordNum = `Four`
  } else if (diceSum === 5) {
    prefix = `Fever`
    wordNum = `Five`
  } else if (diceSum === 6) {
    wordNum = `Six`
  }


  theMsg.textContent = `You rolled: ${prefix} ${wordNum}`


  // AND (exclusive) &&
  // OR (inclusive)  ||

  /*

  &&    | true  false
  ------------------
  true  | true  false
  false | false false


  ||    | true  false
  ------------------
  true  | true  true
  false | true  false

  */



  // Update the message
  //theMsg.textContent = `You rolled: ${crapsMsg}`

  // Update the diceface image
  dice1.setAttribute(`src`, `img/dice${diceRoll1}.svg`)
  dice1.setAttribute(`alt`, `Rolled ${diceRoll1}`)

  dice2.setAttribute(`src`, `img/dice${diceRoll2}.svg`)
  dice2.setAttribute(`alt`, `Rolled ${diceRoll2}`)
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



  // Falsy
  // - false
  // - 0
  // - null
  // - undefined
  // - NaN
  // - ""