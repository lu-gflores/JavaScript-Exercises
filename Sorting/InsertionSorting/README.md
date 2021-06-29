# Insertion Sorting

## Description

Builds up sort by gradually creating a larger half which is always sorted.
It takes one element at a time and insert it into the correct spot

```javascript
/*
    Psuedocode
    - Start by picking the second element in the array
    - Now compare the second element with the one before it and 
    swap if necessary
    - continue to the next element and if it is in the incorrect order,
    iterate through the sorted positon (ex. the left side) to place the element
    in the correct place
    - Repeat until the array is sorted.

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    //looping backwards so that we can copy the values without losing something we need
    for (let j = i - 1; j >= 0; j--) {
      //place we're looking for is too big, so copy the value to the right to make room
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
        // don't need to copy, so break out of iteration
      } else break;
    }
    //put our current value in the spot we create for it
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([43, 65, 12, 66, 22, 89, 32]);
```
