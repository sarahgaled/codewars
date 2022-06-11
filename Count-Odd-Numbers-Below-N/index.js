/* Given a number n, return the number of positive odd numbers below n */
// Examples: 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])




// create the function oddCount and pass in n
function oddCount(n){
  // use the Math.floor method to round down to the nearest integer and divide by 2
    let result = Math.floor(n/2)
  
     return result
    }

    console.log(oddCount(15023))