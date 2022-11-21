/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let newArr = [];

  for (let index = 0; index < nums.length; index += 2) {
    let freq = nums[index];
    let val = nums[index + 1];

    while (freq > 0) {
      newArr.push(val);
      freq--;
    }
  }

  return newArr;
};

decompressRLElist([1, 2, 3, 4]);
