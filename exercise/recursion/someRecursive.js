
let isOdd = (num) => num % 2 !== 0

function someRecursive(arr, fun) {

    if (arr.length === 0) {
        return false
    } else {
        let res = fun(arr.pop())
        if (res) {
            return true
        } else {
            return someRecursive(arr, fun)
        }
    }
  
}


let check = someRecursive([1, 2, 3, 4], isOdd);

console.log(check);
