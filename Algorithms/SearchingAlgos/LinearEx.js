/*
    Psuedocode

    -This funciton accepts an array and a value
    -Loop through this array and check if the current
    array eleemnt is equal to the value
    -if it is, return the index at which the element is found
    -if no value is found, return -1

    **Don't use indexOf!
*/

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}