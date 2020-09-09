/*
Write a function that takes in a string as an argument and returns the reverse of the string as the output.
*/

// function takes in the argument, splits the string, reverses it, and puts the string back together.
// this can all be done in a single line of code!

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString('Hello World!'))