/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let maxSum = 0;






    let cMax = maxSum = nums[0]

    for (let index = 1; index < nums.length; index++) {
       
        cMax = Math.max(nums[index], nums[index] + cMax )
        maxSum = Math.max(cMax, maxSum);
    }




    return maxSum;

};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));