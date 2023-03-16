


console.log(sameFrequency(200, 200));


function sameFrequency(a, b) {

    if ("".concat(a).length === "".concat(b).length) {

        let a_ctr = counter(a)
        let b_ctr = counter(b);

        console.log(a_ctr, b_ctr);

        return compare(a_ctr,b_ctr)
        
    } else {
        return false;
    }

}

function counter(num) {

    let ctr = {}

    let q = "".concat(num)
    for(let c of q) {
        ctr[c] ? ++ctr[c]:ctr[c] = 1
    }
    return ctr
    
}

function compare(a,b) {


    for (const key in a) {
        if (a[key] !== b[key]) {
            return false
        }
    }

    return true;
    
}