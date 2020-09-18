/*
Write a function that passes in a number, and returns the factorial of that number
So :
4! = 24 ( 4 x 3 x 2 x 1)
1! = 1
 
 */
const factorial = num => {
    if (num > 1) {
        return num * factorial(num - 1 ) 
    } else  {
        return 1
    }
}
console.log(factorial(9))
console.log(factorial(12))
console.log(factorial(1))