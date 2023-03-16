/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let number = [];

  for (let i = 0; i < nums.length; i++) {
    number.splice(index[i], 0, nums[i]);
  }

  return number;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
