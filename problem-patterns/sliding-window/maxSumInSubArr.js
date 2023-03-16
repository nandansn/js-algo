
function maxSubarraySum(array, num) {
    let maxSum = 0

    if (array.length < num) {
        return null;
    } 

    if (array.length === num) {
        maxSum = array.reduce((p,c, t) => {t = p + c; return t}, 0) 
        return maxSum
    }

    
    for (let i = 0; i < array.length; i++) {
        let itr = num
        let j = i;
        let total = 0
        while (itr >= 1) {
            total = total + array[j]
            ++j
            --itr
        } 

        if (total > maxSum) {
            maxSum = total
        }
        
        
    }

    return maxSum

}


console.log(maxSubarraySum([100, 200, 300, 400], 2));

    console.log(maxSubarraySum([100,200,300,400], 2)) // 700
    console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
    console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
    console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
    console.log(maxSubarraySum([2,3], 3)) // null
