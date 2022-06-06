/* Given a number n, return the number of positive odd numbers below n */
// Examples: 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// create the function oddCount and pass in n
// function oddCount(n){
//     // declare a variable to store the result
//     let result = 0
//     // use a for loop to iterate through n
//     for(let i = 1; i <= n; i++){
//         // check to see if n is odd
//         if(n % 2 === 1){
//             // divide the result by 2 and round down
//             result = Math.floor(n/2)
//         }
//     }
//     return result
// }


function oddCount(n){
  
    //   Declare a vraiable to hold the result
      let result = 0
    // use for loop to iterate through n
      for(let i = 1; i < n; i++){
        //   if statement to check if n is odd
    //     if(n % 2 === 1){
    //       if it is indeed odd then take n and divide it by 2
          result = Math.floor(n/2)
    //     }
      }
     return result
    }

    console.log(oddCount(15023))