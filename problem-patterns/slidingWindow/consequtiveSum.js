function sum(arr, num) {
  let maxSum = 0;

  if (arr.length === 0) return null;
  if (num <= 0) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let index = num; index < arr.length; index++) {
    if (num === 1) {
      if (maxSum < arr[index]) {
        maxSum = arr[index];
      }
    } else {
      let sum = 0;
      sum = maxSum - arr[index - num];
      sum += arr[index];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

console.log(sum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(sum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(sum([4, 2, 1, 6], 1));
console.log(sum([4, 2, 1, 6, 2], 4));
console.log(sum([], 4));
