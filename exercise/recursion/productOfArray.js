function productOfArray(arr) {
    let len = arr.length;


    function helper(index) {
        if (index === 0) {
            
            return arr[index]
        } else {
            
            return arr[index] * helper(index-1)
        }
    }

    return helper(len-1);
}

console.log(productOfArray([1,2,3]))