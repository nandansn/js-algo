function sumZero(sortedArr) {
    let pair = []
    let i = 0;
    let j = sortedArr.length - 1 ;
    for (let index = 0; index < sortedArr.length; index++) {
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

console.log(sumZero([-3,-2,-1,0,1,3,4]))