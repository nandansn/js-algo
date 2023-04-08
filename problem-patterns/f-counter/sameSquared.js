// sameSquared, uses frequency pattern

function sameSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter = {};

  for (let index = 0; index < arr1.length; index++) {
    counter[arr1[index]]
      ? (counter[arr1[index]] += 1)
      : (counter[arr1[index]] = 1);
  }

  for (let index = 0; index < arr2.length; index++) {
    let key = Math.sqrt(arr2[index]);
    if (key in counter === false || counter[key] === 0) {
      return false;
    } else {
      counter[key] = counter[key] - 1;
    }
  }

  return true;
}

console.log(sameSquared([1, 2, 3], [4, 1, 9])); // true

console.log(sameSquared([1, 2, 3], [1, 9])); // false

console.log(sameSquared([1, 2, 1], [4, 4, 1])); // false

console.log(sameSquared([2, 3, 6, 8, 8], [64, 36, 4, 9, 64])); // true
