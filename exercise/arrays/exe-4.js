/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let newNums = [];
  let flip = true;
  let j = 0;
  let i = 0

  for (let index = 0; index < nums.length; index++) {
    if (flip) {
      newNums[j] = nums[i];
      flip = false;
      ++i;
    } else {
      newNums[j] = nums[n];
      flip = true;
      ++n;
    }

    ++j
  }

  return newNums;
};


shuffle([2, 5, 1, 3, 4, 7], 3);


