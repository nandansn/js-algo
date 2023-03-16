/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let newArray = []

  nums.forEach((num,i) => {
    newArray[i] = nums[nums[i]]
  })

  
  return newArray
};


buildArray([5, 0, 1, 2, 3, 4]);