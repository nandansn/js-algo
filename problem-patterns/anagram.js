function validAnagram(str1,str2) {
    if (str1.length !== str2.length) {
        return false;
    } else {
        let str1Counter = frequencyCounter(str1)
        let str2Counter = frequencyCounter(str2)

        for (const item in str1Counter) {

            if (str1Counter[item] !== str2Counter[item]) {
                return false;
            }
            
        }

        return true
    }
}

function frequencyCounter(str) {
    let counter = {}
    for (const item of str) {
        counter[item] = (counter[item] || 0) + 1;
    }

    return counter;
}

console.log(validAnagram('nandakumar','kumarnanda'))