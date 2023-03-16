/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  nums.sort((a, b) => a - b);

  let small = nums[0];
  let large = nums[nums.length - 1];

  let max = 0;

  for (let i = 1; i <= small; i++) {
    if (small % i == 0 && large % i == 0) {
      if (i > max) {
        max = i;
      }
    }
  }

  return max;
};

findGCD((nums = [2, 5, 6, 9, 10]));
