let arr = [2,1,9,76,4];

function insertionSort() {
  for (let i = 1; i < arr.length; i++) {

  
    for (let j = i-1; j > -1; j--) {

        if (arr[i] < arr [j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        console.log(arr);
      
    }

   
  }
}

insertionSort();

console.log(arr);
