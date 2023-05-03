function sumZero(arr) {
  if (arr.length <= 2) return undefined;

  let lPointer = 0;
  let rPointer = arr.length - 1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[lPointer] > 0 || arr[rPointer] < 0 || lPointer === rPointer)
      return undefined;

    let result = arr[lPointer] + arr[rPointer];

    if (result === 0) return [arr[lPointer], arr[rPointer]];

    if (result < 0) {
      lPointer += 1;
    } else {
      rPointer -= 1;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

console.log(sumZero([1, 2, 3]));
