// you only need one- beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// We can use two methods:
// the .includes() method takes in the argument and will run the check to see if it exists in the array and will return true or false
// or we can use the indexOf() method that will return the index of the element if it exists and will return -1 if it does not exist

// includes method
function check(a, x){
    return a.includes(x)
}

// indexOf method
function check(a, x){
    // since indexOf returns either the index of the element or -1, we can implement a ternary to return true or false
    return a.indexOf(x) > -1 ? true : false
}
