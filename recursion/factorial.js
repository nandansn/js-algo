function fact(num) {
    if (num === 1) {
        return num;
    } else {
        return num * fact(--num);
    }
}

console.log(fact(3))