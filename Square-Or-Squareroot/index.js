// write a method, that will get an integer array as parameter and will process every number from this array
// Return a new array with processing every number of the input-array like this:
// if the number has an integer square root, take this, otherwise square the number.
// Example: [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array){
    // use the map method to map through the array
    // we will write a ternary for does the squareroot of the current element equal the square of 
    // the current element.toFixed(0)?
    // if yes then take the squareroot
    // if not then multiply that element by itself
    // and return it


    // orrrr
    // we could map through the array and use a ternary to check is the squareroot of x has a remainder of 1
    // then square the number, if it doesnt have a remainder then take the square root and return it
}