/* Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */


// create the function squareSum and pass in an array as an argument
function squareSum(numbers){
    // declare a variable to store the sum
    let sum = 0
    // use the forEach method to iterate through numbers array
    numbers.forEach(n => {
        // square each element and then sum up the result 
       sum += (n ** 2)
    });
    // return the sum
    return sum
}

console.log(squareSum([1,2]))