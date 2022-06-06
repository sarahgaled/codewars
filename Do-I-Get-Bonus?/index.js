/*  It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
*/

// create a function called bonusTime and pass in salary and bonus as arguments
function bonusTime(salary, bonus){
// declare a vatiable to hold the result
let result = 0
// use an if statement
if(bonus){
   return result = "\u00A3" + (salary * 10)
} else {
    return result = "\u00A3" + salary
}
return result
}

console.log(bonusTime(25000))



