/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let chars = [...s];
  let balancedCount = 0;
  let rCount = 0;
  let lCount = 0;

  for (const char of chars) {
    if (char === "R") {
      rCount += 1;
    }
    if (char === "L") {
      lCount += 1;
    }

    if (lCount - rCount === 0) {
      balancedCount += 1;
    }
  }

  return balancedCount;
};

let op = balancedStringSplit("LLLLRRR");
console.log(op);
