/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  // create array of chars
  // get the index of

  let newStr = "";

  for (let index = 0; index < s.length; index += 2) {
    let c = s[index];

    if (index + 1 > s.length) {
        newStr = newStr.concat(s[index]);
        return newStr;
    }
    let d = parseInt(s[index + 1]);

    let cIndex = alphabets.indexOf(c);
    let shiftIndex = cIndex + d;

    s[index + 1] = alphabets[shiftIndex];

    newStr = newStr.concat(s[index]).concat(alphabets[shiftIndex]);
  }

  return newStr;
};

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

replaceDigits("a1c1e1");
