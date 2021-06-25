/*
    Write a function called averagePair. Given a SORTED array of integers and a target average, determine if there is a pair of
    values in the array where the average of the pair equals the target avaerage. There may be more than one pair that
    matches the average target.

*/


function averagePair(arr, num) {
    if (arr.length === 0) return false
    //pointer for start
    let start = 0
    //pointer that starts at the end of the array,
    //then moves down
    let end = arr.length - 1

    while (start < arr.length) {
        let average = (arr[start] - arr[end]) / 2
        if (average === num) return true
        else if (average > num) {
            end--
        } else {
            start++
        }
    }
    return false
}