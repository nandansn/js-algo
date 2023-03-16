/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

  let maxAverage = 0;
  let sum = 0;

  for (let index = 0; index < k; index++) {
    sum = sum + nums[index];
  }

  maxAverage = sum / k;

  for (let index = k; index < nums.length; index++) {
    sum = sum - nums[index - k] + nums[index];



    let cAverage = sum / k;

    maxAverage = Math.max(cAverage, maxAverage);
  }

  return maxAverage;
};

console.log(findMaxAverage([4, 2, 1, 3, 3], 2));
