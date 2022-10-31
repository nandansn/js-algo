function capitalizeWords(words) {
  // add whatever parameters you deem necessary - good luck!

  let wordsLen = words.length - 1

  function helper(index) {

    if (index < 0) {
        return
    } else {
        words[index] = words[index].toUpperCase()
        helper(index-1)
    }
    
  }

  helper(wordsLen)

  return words


}


let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']