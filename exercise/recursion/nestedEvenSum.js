function nestedEvenSum (obj) {
  let evenSum = 0

  function helper(obj) {

    if (obj === undefined) {
        return
    } else {
        for (key in obj) {
            if (typeof obj[key] === 'number') {
                let num = obj[key] % 2 === 0 ? obj[key] : 0
                evenSum = evenSum + num;
            } else if (typeof obj[key] === 'object') {
                 helper(obj[key])
            }

        }
    }


    
  }

  helper(obj);

  return evenSum

}

  


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))