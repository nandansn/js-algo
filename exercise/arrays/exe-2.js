/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let s = 0


    return nums.map((num) => {
        s = s + num
        return s
    })

};

console.log(runningSum([1, 2, 3, 4]));
