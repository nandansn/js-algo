/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let output = [];

  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      output[index - 1] = "FizzBuzz";
    } else if (index % 3 === 0) {
      output[index - 1] = "Fizz";
    } else if (index % 5 === 0) {
      output[index - 1] = "Buzz";
    } else {
      output[index - 1] = index.toString();
    }
  }

  return output;
};

console.log(fizzBuzz(15));
