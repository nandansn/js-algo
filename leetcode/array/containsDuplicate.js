/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {


  let str = []

  for (const num of nums) {
    
  
    

    if (str.indexOf(num) === -1) {       
        str.push(num)
    } else {
        return true
    }
  }

  return false
};


console.log(containsDuplicate([1,2,3,4]));