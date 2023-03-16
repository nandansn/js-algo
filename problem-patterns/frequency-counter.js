function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        let arr1Counter = frequencyCounter(arr1);
        let arr2Counter = frequencyCounter(arr2);
        console.log(arr1Counter, arr2Counter)

        for (const val of arr1) {
            if (arr1Counter[val] !== arr2Counter[val ** 2] ) {
                return false
            } 
        }

        return true;
    }
}

function frequencyCounter(arr) {
    let counter = {}
    
    for (const val of arr) {
        counter[val] = (counter[val] || 0 )  + 1
    }

    return counter;
}

console.log(same([1,3,1],[1,9,1]));