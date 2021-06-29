function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        // if the element of the first array is smaller, push it in the result array
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr1.length) {
        result.push(arr1[j])
        j++
    }
    return result
}

merge([123, 54, 63], [23, 76, 8])


//helper function that splits the arrays into smaller arrays
function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
// mergeSort([12, 23, 63, 2, 7, 1, 86, 13])