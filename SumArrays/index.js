// write a function that takes an array of numbers and returns the sum of the numbers.
// the numbers can be negative or non integer. if the array does not contain any numbers, then return 0

function sum(numbers) {
  // create a variable result and let it = 0
  let result = 0;
  // iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    // add all the elements of the array to the result variable
    result += numbers[i];
  }
// then return result

}


