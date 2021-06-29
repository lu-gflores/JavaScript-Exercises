# Selection Sorting

## Description

Like bubble sorting, instead of first placing the large values into the sorted position,
it places small values into the sorted position

```javascript
/*
    Selection Sort Psuedocode
    - Store the first element as the smalles value you've seen so far
    - Compare this item to the next item in the array until you find a smaller number
    - If a small number is found, signate that smaller number to be the new 'min' and continue
    until the end of the array
    - If the 'min' is not the value (index) you initially began with, swap the two values
    - repeat this with the next element until the array is sorted

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    //compares the element one higher than i (next element)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([23, 34, 14, 6, 78]);
```

- Not ideally the best method of sorting, time complexity is O(n^2)
