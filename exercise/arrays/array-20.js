/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // nums = [1,2,2,1], k = 1

  // loop
  // check i'th element with i +1 th element, 2 checks
  // if i + 1 >= array length, exit loop else
  // find the difference, increment the count accoringly

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    while (j < nums.length) {
      let diff = nums[i] - nums[j];

      if (diff == k || diff == -k) {
        count++;
      }

      j++;
    }
  }

  return count;
};

console.log(countKDifference((nums = [1, 2, 2, 1]), (k = 1)));
