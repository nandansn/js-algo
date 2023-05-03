function flatten(arr) {
  let newArray = [];

  if (arr.length > 0) {
    function helper(arr, index) {
      console.log(index);
      if (index >= arr.length) {
        console.log("hello");
        return newArray;
      }

      if (arr[index].length === undefined) {
        newArray.push(arr[index]);
        helper(arr, ++index);
      } else {
        helper(arr[index], 0);
        helper(arr, ++index);
      }
    }
    helper(arr, 0);
  }

  return newArray;
}

console.log(flatten([1, 2, 3, 4, [1, 2], 7, 89, [4, 5, [6, 7, 8]]]));
