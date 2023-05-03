function fib(n) {
  // add whatever parameters you deem necessary - good luck!

  let nthNumber = 0;

  if (n < 1) {
    return 0;
  } else {
    nthNumber = 1;
    function helper(n) {
      if (n < 3) {
        return 1;
      } else {
        nthNumber = helper(n - 1) + helper(n - 2);
        return nthNumber;
      }
    }

    helper(n);
  }

  return nthNumber;
}

console.log(fib(35));
