/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {

    let countArray = []


    for (let i = 0; i < nums.length; i++) {

        let count = 0
        
        for (let j = 0; j < nums.length; j++) {
            
            if (nums[i] > nums[j]) {
                ++count;
                console.log(count);

            }
            
        }

        countArray.push(count)
        
    }

    return countArray
    
};


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));