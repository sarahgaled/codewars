/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
"String"      -> "SSttrriinngg"
"Hello World" -> "HHeelllloo  WWoorrlldd"
"1234!_ "     -> "11223344!!__  "
*/

// build a function called doubleChar and pass in a string argument
function doubleChar(str) {
  // use the split method to split the string and that will be put into a new array
  // use the map method to iterate and update
  // add each element to each other
  // use the join method
  // and return the str
  return str
    .split("")
    .map((element) => element + element)
    .join("");
}

console.log(doubleChar("adidas"));
