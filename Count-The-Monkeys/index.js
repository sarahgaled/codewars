/* You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
For example(Input --> Output):
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1] */

//  create a function called monkeyCount and pass in n
function monkeyCount(n){
    // create a empty array to store the results
    let monkeys = []
    // use a for loop till we reach n, including n
    for(let i = 1; i <= n; i++){
        // and push the values into the array
        monkeys.push(i)
    }
    // return the result
    return monkeys
}

console.log(monkeyCount(5))