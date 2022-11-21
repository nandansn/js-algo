/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {


    let w1 = word1.reduce((str,c) => {return str + c},"")
    let w2 = word2.reduce((str, c) => {
      return str + c;
    }, "");

    return w1 === w2
};

console.log(arrayStringsAreEqual((word1 = ["ab", "cl"]), (word2 = ["a", "bc"])));

