/* Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.*/

String.prototype.isUpperCase = function(string){
    // the prototype method receives the instance in "this"
    return String(this) === this.toUpperCase()
    // The String(this) call makes sure that "this" is a string primitive and not a string object.
}

