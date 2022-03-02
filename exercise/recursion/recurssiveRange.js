function recursiveRange(num){
   if (num === 1){
       return 1
   } else {
       return num + recursiveRange(num-1)
   }
}

console.log(recursiveRange(5))