/*
Write a function that passes an array and number, multiply that number to that array, and return
the result.
ex:
Input: modifyArray([1, 2, 4, 5], 4)
Output: [4, 8, 16, 20]
*/

const modifyArray = (arr, num) => {
    const result = arr.map(x => x * num)
    return result;
}

console.log(modifyArray([2,34, 5, 6], 4))
console.log(modifyArray([25, 875, -9, 23, 32, 4], 2))