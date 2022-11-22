/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenCount = 0;

  evenCount = nums.filter((num) => {
    

    return num.toString().length % 2 == 0 ? true : false;
  }).length;

  return evenCount;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
