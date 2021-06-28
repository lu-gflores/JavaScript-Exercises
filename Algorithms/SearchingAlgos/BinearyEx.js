/*

    Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value
    exists. Otherwise, return -1

    Psuedocode
    -Function accepts a sorted array and value
    -Create a left pointer at the start of the array and
    a right pointer at the end of the array
    -While the left pointer comes before the right pointer:
        - create a pointer in the middle
        - if you find the value you want, return the index
        - if the value is too small, move the left pointer up
        - if the value is too large, move the right pointer down
    -if you never find the value, return -1
*/

function binarySearch(arr, val) {
    //pointers for the start and end of the array
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        // middle pointer in array
        let middle = Math.floor((left + right) / 2)
        //if the middle value is smaller, move the left pointer up 1 from the middle
        if (arr[middle] < val) {
            left = middle + 1
            //if the middle value is larger, move the right pointer down 1 from the middle
        } else if (arr[middle] > val) {
            right = middle + 1
            //return the index of the middle that exists
        } else return middle
    }
    return -1
}