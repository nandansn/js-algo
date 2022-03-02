function power(num, pow) {
    if (pow === 0) {
        return 1;
    }
    if (pow === 1) {
        return num;
    } else {
        return num * power(num,--pow)
    }

}

console.log(power(3,0))
