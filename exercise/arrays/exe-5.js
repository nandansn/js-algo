/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    let goodPairCount = 0

    nums.sort()

    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] == nums[j]) {
                goodPairCount++
            } else {
                break;
            }
            
        }
        
    }

    return goodPairCount
};


numIdenticalPairs([1,2,3]);

