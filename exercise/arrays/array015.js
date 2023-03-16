/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = words.length;

  words.forEach((word) => {
    for (let index = 0; index < word.length; index++) {
      if (!allowed.includes(word[index])) {
        count--;
        break;
      }
    }
  });

  return count;
};

console.log(
  countConsistentStrings(
    (allowed = "ab"),
    (words = ["ad", "bd", "aaab", "baa", "badab"])
  )
);
