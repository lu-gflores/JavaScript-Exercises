/*
Write a function that takes a string as an argument and return true if the string is a palidrome
or return false if the string is NOT a palidrome.

Example:
    racecar is spelled the same when put backwards.
    So...
        isPalidrome('racecar') = true
    horse is not spelled the same when put backwards. 
    So...
        isPalidrome('horse') = false
*/

// we pass in the string, split its characters, reverse it, and reconnect the characters
// then we compare if it matches the original string that was passed. This will return true
// if both strings match and false if they do not.
const isPalidrome = str => str.split('').reverse().join('') === str;


function isPalidrome(str) {
    str = str.replace(/[\s\.\,\/]/g, '').toLowerCase() //removes spaces and special characters
    return str.split('').reverse().join('') === str;
}


console.log(isPalidrome('racecar'))
console.log(isPalidrome('school'))
