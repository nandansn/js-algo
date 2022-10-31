function capitalizeFirst(arr) {
  
  let newArr = []

  function helper(arr) {

    if (arr.length === 0) {
        return 
    }

    let item = arr[0] 
    item = item[0].toUpperCase() + item.substring(1, item.length);
    newArr.push(item)

    return helper(arr.slice(1))
    
  }

  helper(arr)

  return newArr;

}

console.log(capitalizeFirst(['car','taco','banana']));


