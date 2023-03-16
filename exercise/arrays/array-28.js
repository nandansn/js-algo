/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let max = Math.max(...nums);

  let len = nums.length

  let all_nums = [...Array(max).keys()];

  for (let i = 0; i < all_nums.length; i++) {
    if (nums.indexOf(i) < 0) {
      len = i
      break;
    }
  }

  return len
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
