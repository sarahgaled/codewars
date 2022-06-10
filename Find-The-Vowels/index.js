/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)*/

// create a function vowelIndeces and pass in string word as an argument
function vowelIndeces(word){
    // declare an empty array to store the result
    let result = []
    // create a string for the vowels -  lower and uppercase characters
    let vowel = 'aeiouyAEIOUY'
    // then use the split method on word and use the for each method
    word.split('').forEach((letter, index) => {
        // check to see if the vowel string includes any letter from word and if it does 
        if(vowel.includes(letter)){
            // then push the index + 1 into the result array
            result.push(index + 1)
        }
    })
    // return the array
    return result
}

console.log(vowelIndeces('apple'))






