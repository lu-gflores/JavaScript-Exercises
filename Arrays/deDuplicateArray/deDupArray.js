/*
Write a funciton that removes duplicate values in the given array

*/
//Solution 1 : spread operator
// const deDupArr = arr => {
//     return [... new Set(arr)]
// }

//Solution 2: filter 
const deDupArr = arr => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(deDupArr([1, 1, 2, 3, 4, 55, ,55, 6, 7, 2]))
