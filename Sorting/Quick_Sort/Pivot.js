//pivot helper function 
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivotHelper = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < end; i++) {
        if (pivotHelper > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}
pivot([4, 7, 2, 1, 4, 5, 3])


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left 
        quickSort(arr, left, pivotIndex - 1)
        //right 
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([4, 5, 8, 2, 7, 1, 9]))