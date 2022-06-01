// multiply a given number by eight if it is even number and by nine otherwise
// set up a function and pass a variable for the given number
function simpleMultiplication(number) {
  // create an if statement that takes care of if eight is modulo 2 === 0
  if (number % 2 === 0) {
    // then multiply the given number by 8
    return number * 8;
  } // else multiply that number by 9
  else {
    // and return
    return number * 9;
  }
}

console.log(simpleMultiplication(10))