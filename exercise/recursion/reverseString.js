function reverse(str) {

    let rStr = ""
   
    function helper(nStr) {
        if (nStr.length === 0) {
            return rStr
        } else {
            rStr = rStr + nStr.slice(-1);
            helper(nStr.substr(0, nStr.length - 1));
            return rStr
        }
    }

    helper(str)

    return rStr;
    
}

console.log(reverse("awesome"));