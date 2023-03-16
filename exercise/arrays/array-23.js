/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let unique = {};

  let newNums = [];

  nums.forEach((num) => {
    if (unique[num] >= 1) {
      unique[num]++;
    } else {
      newNums.push(num);
      unique[num] = 1;
    }
  });

  newNums.sort((a, b) => a - b);

  console.log(newNums);

  if (newNums.length < 3) {
    return newNums[newNums.length - 1];
  } else {
    return newNums[newNums.length - 3];
  }
};

console.log(thirdMax((nums = [2, 2, 2, 1])));
