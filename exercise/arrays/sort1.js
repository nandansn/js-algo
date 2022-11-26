function bubble_sort(nums) {


    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i + 1; j < nums.length; j++) {

            
            
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            } 
            
        }
        
    }


    return nums
    
}


console.log(bubble_sort([3,1,2,38,9,100,17,5,2,7]));


