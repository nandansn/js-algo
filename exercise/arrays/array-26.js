/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let keys_1 = "qwertyuiop";
  let keys_2 = "asdfghjkl";
  let keys_3 = "zxcvbnm";

  let matched = [];

  words.forEach((word) => {
    let c = new Set([...word]);

    if (check(c, keys_1)) {
      matched.push(word);
    } else if (check(c, keys_2)) {
      matched.push(word);
    } else if (check(c, keys_3)) {
      matched.push(word);
    }
  });

  return matched;
};

function check(str, keys) {
  let c = [...str];

  for (let index = 0; index < c.length; index++) {
    if (!keys.includes(c[index].toLowerCase())) {
      return false;
    }
  }

  return true;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
