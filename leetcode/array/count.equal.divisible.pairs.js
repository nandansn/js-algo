/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (array, k) {
  let map = new Map();
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (map.has(array[index])) {
      let mul = index * map.get(array[index]);
      console.log(map.get(array[index]), index);
      if (mul % k === 0) {
        count += 1;
         map.set(array[index], index);
      } 
      console.log(map);
      
    } else {
      map.set(array[index], index);
    }
  }

  return count
};

console.log(countPairs([3,1,2,2,2,1,3],2))


