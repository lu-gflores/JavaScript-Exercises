# Bubble Sorting

## Description

A simple sorting algorithm that basically compares elements in a collection and swaps them if they are
in the wrong order

## Swapping technique

```javascript
// ES 5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES 2015

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = arr[(idx2, arr[idx1])];
};
```

## Implementing (less optimized)

```javascript
function bubbleSorting(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSorting([37, 45, 29, 8]);
//[ 37, 29, 8, 45]
//[ 29, 8, 37, 45]
//[ 8, 29, 37, 45]
```

## Optimized

```javascript
function bubbleSorting(arr) {
  // makes less comparisions in the loop and save time
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```

Time complexity is O(n ^ 2)
