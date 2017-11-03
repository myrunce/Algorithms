let bubbleSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp
      i = 0;
    }
    else {
      i++
    }
  }
  return arr;
}

console.log(bubbleSort([5,10,75,1,25]));