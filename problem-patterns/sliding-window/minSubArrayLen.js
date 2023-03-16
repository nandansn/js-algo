
function minSubArrayLen(array, num) {


    let minSubArrLen = 0
    


    for (let index = 0; index < array.length; index++) {
        
        let sum = 0
        let subArray = [];
        let j = index
        while (sum < num && j < array.length) {
            
            subArray.push(array[j])
            sum = sum + array[j]
            j++
        }
        
        if ((minSubArrLen == 0 || minSubArrLen > subArray.length) && sum >= num) {
            minSubArrLen = subArray.length
        } 

        //console.log(subArray);
    }

    

    console.log(minSubArrLen);

    return minSubArrLen


}




minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],3000) // 5