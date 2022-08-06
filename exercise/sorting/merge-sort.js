
function mergingTwoArrays(a,b){
    let c = [];
    let aIndex = 0;
    let cIndex = 0;
    let bInndex = 0;

    let totalLength = a.length + b.length;

    while (cIndex < totalLength -1 ) {
        if (a[aIndex] < b[bInndex]) {
            c[cIndex] = a[aIndex]
            ++aIndex;
        } else {
            c[cIndex] = b[bInndex]
            ++bInndex
        }
        ++cIndex;
    }
    
    return c;
    
}

console.log(mergingTwoArrays([1,4,7],[2,5,6]))