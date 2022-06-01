// Instructions:
// Build a function that returns an array of integers from 1 to n where n > 0
// Example: n = 5 --> [5,4,3,2,1]

// create a function and pass in n as an argument
function reversedSeq(n) {
  // create an array to hold the results
  let result = [];
  // iterate through the array
  for (let i = 1; i <= n; i++) {
    // push in the current element into the array
    result.push(i);
  }
  // reverse the array and return it
  return result.reverse();
}

// Second Solution
// create a function and pass in n as an argument
function reversedSeq(n) {
  // create an array to hold the results
  let result = [];
  // iterate through the array and count backwards
  for (let i = n; i > 0; i--) {
    // push in the current element into the array
    result.push(i);
  }
  // return the array
  return result;
}
