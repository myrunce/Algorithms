let selectionSort = (arr) => {
    let newArr = [];
    let sort = (arr) => {
      let min = arr[0];
      if (arr.length === 0) {
        return;
      }
      for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      let temp = arr[0];
      let k = arr.indexOf(min)
      arr[0] = arr[k];
      arr[k] = temp;
      newArr.push(arr.shift());
      sort(arr);
    }
    sort(arr);
    return newArr;
  }
  
  console.log(selectionSort([81,20,75,1,42]));