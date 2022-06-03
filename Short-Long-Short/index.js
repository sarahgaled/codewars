/* Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside 
and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).*/

// create the function and pass in two the parameters
function solution(a,b){
    // create two variables long and short and assign them to ternaries that will check the length of the strings
    // let short = a.length < b.length ? a : b
    // let long = a.length > b.length ? a : b
    // since the shorter string should be on the outside long will be added in between shorter
    // return short + long + short

    // another solution
    return a.length > b.length ? b + a + b : a + b + a
}

console.log(solution('13', '200'))