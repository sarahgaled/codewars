/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
Example: ([1, 2, 3], [4, 5, 6]), 21
*/

// build a function arrayPlusArray and pass in arr1 and arr2 as array arguments
function arrayPlusArray(arr1, arr2){
// decalre a new array - arr 3 and use the concat method to merge both arr1 and arr2 in arr3
let arr3 = arr1.concat(arr2)
// declare and initialize a variable that will store the result
let result = 0
// use the for each method to iterate through arr3 and for each element in the array, 
arr3.forEach(element => {
    // add it to result
    result += element
});
// return result
return result
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))





