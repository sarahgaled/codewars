function countPositivesSumNegatives(input) {
  // if the input is null empty or 0
  if (input === null || input.length === 0) {
    // return an empty array
    return [];
  }
  // create variable to store the positive count
  let positiveCount = 0;
  // and a variable to store the negative count
  let negativeCount = 0;
  // loop through the input array
  for (let i = 0; i < input.length; i++) {
    // if the number is greater than 0
    if (input[i] > 0) {
      // then count the positive numbers
      positiveCount++;
    }
    // if the number is less than 0
    elseif(input[i] < 0);
    // then add the negative numbers
    negativeCount += input[0];
  }
  // return the array with the positive count and sum of negative numbers
  return [positiveCount, negativeCount];
}
