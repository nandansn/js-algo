function sort(nums) {
    
    for (let i = 1; i < nums.length; i++) {   
        let cVal = nums[i]   
        let j = i -1  
        for (; j >= 0 && nums[j] > cVal; j--) {
        
                nums[j+1] = nums[j]
            
        }

        nums[j+1] = cVal
    }

    console.log("sorted",nums);
}


sort([2,1,3,99,4,5,90,1])