/* Complete the solution so that it reverses all of the words within the string passed in.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// build a function called reverseWords and pass in a str
function reverseWords(str) {
  // use the split method on the string and split the word, not the character
  // then use the reverse method to reverse the order of words in the array
  // then use the join method to join the words back into a string with a space
  // return the string
  return str.split(" ").reverse().join(" ");
}
