function bubble_sort(nums) {
    let counter = 0
    let noSwap = true
    for (let i = nums.length - 1; i >=0 ; i--) {
        
        for (let j = 0; j < nums.length - 1; j++) {
            
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                noSwap = false
            } 

            console.log(counter++);
            
        }

       

       if (noSwap) break;
        
    }


    return nums
    
}


console.log(bubble_sort([11,1,2,3,4]));


