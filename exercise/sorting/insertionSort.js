let arr = [5, 4, 2, 90, 20, 30];

function insertionSort() {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > -1; j--) {

        if (arr[i] < arr [j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        console.log(arr);
      
    }

   
  }
}

insertionSort();

console.log(arr);
