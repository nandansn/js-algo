/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str = str.concat(s[indices.indexOf(i)]);        
    }
    return str
};


console.log(restoreString(s = "codeleet", indices = [4,5,6,7,0,2,1,3]));