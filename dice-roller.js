// Write a program that takes a single parameter 
// from the command line, a number, and rolls 
// that many six-sided dice.

// > node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

// To generate a random number, you'll have to use the built-in Math.random.

// take the parameter supplied from the command line
const args = process.argv[2];
const argsNumber = Number(args);

const diceRoller = (num) => {
  let diceValues = '';
  for (let i = 0; i < num; i++) {
    const generatedNumber = Math.floor(Math.random()*6+1);
    if (i !== num -1) {
      diceValues += generatedNumber + ', ';
    } else {
      diceValues += generatedNumber;
    }
  }
  return `Rolled ${num} dice: ${diceValues}`
}

console.log(diceRoller(argsNumber));

// node dice-roller.js 5
// node dice-roller.js 0