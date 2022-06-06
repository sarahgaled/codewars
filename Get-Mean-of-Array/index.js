/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.*/

// create a function and pass in an array as an argument
function getAverage(marks){
// declare a variable to store the result
let result = 0
// use the for each loop to loop through the array and for each element
marks.forEach(element => {
    // add it to the result
    result += element
});
// take the result and divide it by the argument array.length
// math.floor to round down to its nearest integer
// return the result
return Math.floor(result/marks.length)
}

console.log(getAverage([2,2,2,2]))

console.log(getAverage([1,2,3,4,5]))




