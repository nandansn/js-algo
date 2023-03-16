/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    let count = {}

    nums.forEach(num => {
        count[num.toString()]
          ? delete count[num.toString()]
          : (count[num.toString()] = 1);
    })

    return Object.keys(count)[0];

   
};

singleNumber((nums = [4, 1, 2, 1, 2]));