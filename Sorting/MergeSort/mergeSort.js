function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

}
mergeSort([12, 23, 63, 2, 7, 1, 86, 13])