function fib(num) {
  if (num < 2) {
    return num;
  } else {
    //console.log(num);
    let s = fib(num - 1) + fib(num - 2);
    return s;
  }
}

console.log(fib(5));

// 0,1,1,2,3,5
