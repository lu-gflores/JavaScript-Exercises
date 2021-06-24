# Divide and Conquer Pattern

## Description

- Involves a dividing a data set into smaller chunks and then repeating a process with a sbuset of data
- can greatly decrease time complexity

## Example

```javascript
/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value
passed to the funciton is located. If the value is not found, return -1
*/


// Naive solution - Linear search
function search(arr, num) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === value) return i
    }
    return -1
}

//Refactored - Binary search
funciton search(arr, num) {
    let min = 0
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)

        let currentElement = arr[middle]

        if(arr[middle] < value ) {
            min = middle + 1
        } else if (arr[middle] > val) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

```
