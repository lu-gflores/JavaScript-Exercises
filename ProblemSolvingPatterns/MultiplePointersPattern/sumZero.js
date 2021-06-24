/*
    Write a funciton called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
    Return an array that includes values that sume to zero or undefined if a pair does not exist.

    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
    sumZero([-2,-1,0,1,3]) //undefined
    sumZero([-1,2,3]) //undefined

*/

// Naive solution: nested loops
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

//O(n^2)- bad time complexity due to nested loops

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

//better solution
function sumZero(arr) {
    //start index of the array
    let left = 0
    //end of indext of the array
    let right = arr.length - 1
    while (left < right) {
        // check the sum of the left and right indexes of the array
        let sum = arr[left] + arr[right]
        //if the sum is zero, return the values of the array whose sum is equal to zero
        if (sum === 0) {
            return [arr[left], arr[right]]
            //else keep going towards the middle of the array
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

//O(n), better time complexity