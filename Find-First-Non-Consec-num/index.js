/* Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too! */

// create the function and pass in the array
function firstNonConsecutive(arr){
    // create variable to store the math for first non consecutive function
    // use the find method to look for the non consecutive integer - if the current element doesnt equal the index of the current element + index of arr[0] which is 1, then we found our non consecutive integer
    firstNonCon = arr.find((value, index) => value !== index + arr[0])
    // then convert the result to make sure we r returning an integer and use a ternary to return the non con number or null
    return Number.isInteger(firstNonCon) ? firstNonCon : null
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))