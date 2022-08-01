let arr = [5,4,2,90,20,30];

function selectionSort() {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMinNumber = i;
    for (let j = i; j < arr.length; j++) {
        if (arr[indexOfMinNumber] > arr[j]) {
          indexOfMinNumber = j;
        }
    }
    
    [arr[indexOfMinNumber], arr[i]] = [arr[i], arr[indexOfMinNumber]]
  }
  
}

selectionSort();

console.log(arr)