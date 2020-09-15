/*
write a function that passes 2 arguments, an array of numbers and a number,
determining if the numbers in the array are all factors of the number passed.

ex: checkFactors([2, 3, 4], 12) => true
    checkFactors([1,3,4], 10) => false
*/

const checkFactors = (arr, num)=> {
    //created a variable to 
    const matches = curr => num % curr === 0;

    return arr.every(matches);
}

console.log(checkFactors([2, 3, 4], 12))
console.log(checkFactors([1,3,4], 10))
