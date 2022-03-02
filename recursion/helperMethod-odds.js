function findOdds(nums) {
    let odds = [];
    let len = nums.length;

    console.log(len)

    function helper(index) {
        if (index < 0) {
            return;
        } 
        if (nums[index] % 2 !== 0) {
            
                odds.push(nums[index])
        }
        

        helper(--index)
        
    }

    helper(--len)

    

    return odds;
}

console.log(findOdds([1,2,3,4,5]))