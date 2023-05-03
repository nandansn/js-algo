function binarySearch(arr, num) {
  let lenofArray = arr.length;
  let start = 0;
  let end = lenofArray - 1;

  function helper(arr, start, end) {
    if (arr[start] === num) {
      return start;
    }
    if (arr[end] === num) {
      return end;
    }

    let mid = Math.round((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    } else {
      if (start === mid) {
        return -1;
      }
      if (arr[mid] > num) {
        end = mid;
      } else {
        start = mid;
      }
      return helper(arr, start, end);
    }
  }

  return helper(arr, start, end);
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    101
  )
);
