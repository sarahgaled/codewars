/* You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
 */

function nextId(ids){
    // use a for loop to loop through the ids in the ids array
      for(let i = 0; i < ids.length; i++){
        //   then use an if statement to check if the current index in the ids array === -1, if it does return the current element
        if(ids.indexOf(i) === -1){
          return i
          console.log(i)
      }
     }
      return ids.length  
      console.log(ids.length)
    }

    console.log(nextId([0,1,2,3,5]))