function sumRange(num) {

    if (num === 0) {
        return 0;
    } else {
        return num + sumRange(--num)
    }

    
}


sumRange(10)
