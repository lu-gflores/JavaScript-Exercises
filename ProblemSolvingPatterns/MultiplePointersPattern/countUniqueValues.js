/*
Implment a funciton called UniqueValues which accepts a sorted array, and count counts the unique 
values in the array. There can be negaive numbers in the array, but it will always be sorted.

    countUniqueValeus([1,1,1,1,1,2]) => 2
    countUniqueValeus([1,2,3,4,4,4,5,5,67,7,12,12,13]) => 7
    countUniqueValues([]) => 0
    countUniqueValues([-2,-1,-1,0,1]) => 4

*/

function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    // pointer start of index 
    let start = 0
    //pointer of the index in the array 
    let nextIdx = arr.length - (arr.length - 1)
    //counter
    let count = 0

    //loop until start index is no longer less than the length of the array
    while (start < arr.length) {
        // if the values are not the same, add one to the counter and contune 
        if (arr[start] !== arr[nextIdx]) {
            count++
            start++
            nextIdx++
        } else {
            start++
            nextIdx++
        }
    }
    return count;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 67, 7, 12, 12, 13]))