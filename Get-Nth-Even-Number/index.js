/* Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0. */

// create a function called nthEven and pass n as an argument - n is an integer
function nthEven(n){
    // when multiplying n by 2 and then subtracting 2 from that result, youll get the nth Even number
    return (n * 2) - 2
}

console.log(nthEven(3))