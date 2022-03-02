function sumRange(num) {
    if (num === 1){
        return 1;
    } else {
        return num + sumRange(--num)
    }


}

console.log(sumRange(10))