/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let newWords = s.split(" ");

  let str = "";

  for (let index = 0; index < k; index++) {
    str = str.concat(newWords[index]).concat(" ");
  }

  str= str.trimEnd()

  return str;
};

truncateSentence((s = "Hello how are you Contestant"), (k = 4));
