// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// create the function and pass in a string
function twoSort(s){
    // sort the array of strings
    let sort = s.sort()
    // take the first element of the array, split it by each character and join it with ***
    return sort[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))