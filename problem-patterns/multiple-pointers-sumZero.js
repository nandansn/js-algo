function sumZero(sortedArr) {
    let pair = []
    let i = 0;
    let j = sortedArr.length - 1 ;
    let c = 1
    while (i < j) {
         
        console.log(c++)
        let diff = sortedArr[i] + sortedArr[j];
        if (diff === 0) {
            pair.push([sortedArr[i],sortedArr[j]])
            return pair
        } else {
            if (diff < 0) {
                i = i + 1
            } else {
                j = j - 1;
            }
        }
   }

    
}

console.log(sumZero([-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,3,16,18,19]))