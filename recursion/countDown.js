function countDown(num) {
    if (num < 0) {
        return
    } else {
        console.log(num)
        countDown(--num)
    }

}

countDown(5)