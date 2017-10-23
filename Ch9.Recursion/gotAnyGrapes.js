//Martin loves grapes. He sees a number of baggies containing grapes, all in a row. Stephen tells him that he 
//can take as many of the baggies as he wants, as long as he doesn't take two that are next to each other. 
//Martin wants to maximize his number of grapes. Create a function to accept an array of non-negative integers 
//representing number of grapes in each adjacent baggy. Your function should return the maximum amount of grapes 
//he can obtain.

let grapes = (arr) => {
    let sum = 0;
    console.log('getSum(' + arr + ', ' + sum + ')')
    let getSum = (arr, sum) => {
      if (arr.length === 1) {
        return arr[0]
      }
      else if (arr.length === 0) {
        return 0;
      }
      else {
        if (arr[0] >= arr[1]) {
          return sum += arr[0] + getSum(arr.slice(2), sum)
        }
        else {
          return sum += arr[1] + getSum(arr.slice(3), sum)
        }
      }
    }
    var maxSum = getSum(arr, sum);
    return maxSum;
  }
  
  console.log(grapes([1,10,9,8,4]));