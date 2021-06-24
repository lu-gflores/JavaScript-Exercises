# Sliding Window Pattern

# Description

- Involves creating a windo which can either be an array or number from one positon to another
- Depending on a certain condition, the windo either increases or closes, and a new window is
  created

- This can be very useful for keeping trrack of a subset of data in an array, string, etc.

## Example

```javascript
/*
    Write a funciton called maxSubArraySum which accepts an array of integers and a number
    called n. the funciton should calculate the maximum sum of n consecutive elemnts in the array.
    
    maxSubArraySum([1,2,5,2,8,1,5], 2) => 10
    maxSubArraySum([1,2,5,2,8,1,5], 4) => 17
    maxSubArraySum([4,2,1,6], 1) => 6 
*/

// naive solution; Not ideal for larger arrays
function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity; //accounts for negative numbers in array

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// using sliding window pattern
function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  // creates first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
