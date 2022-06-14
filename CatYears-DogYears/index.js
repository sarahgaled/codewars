/* I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// build the function humanYears and pass in humanYears as an argument

// function humanYearsCatYearsDogYears(humanYears) {
//   // itialize cat and dog years as 0
//   let catYears = 0;
//   let dogYears = 0;
//   // iterate through humanYears using a for loop
//   if (humanYears === 1) {
//     catYears = 15;
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     catYears = 15 + 9;
//     dogYears = 15 + 9;
//   } else if (humanYears > 2) {
//     catYears = (16) + (4 * humanYears);
//     dogYears = (16) + (5 * humanYears) - 2;
//   }
//   return [humanYears, catYears, dogYears];
// }



// OR

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }

  console.log(humanYearsCatYearsDogYears(10));