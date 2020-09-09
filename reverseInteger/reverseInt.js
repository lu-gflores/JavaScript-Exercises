/*
Write a function that takes a number as an argument and returns it in reverse.
 342 = 243
 98 = 89
 1000 = 1
 -23 = -32  <-- this can be tricky!
*/

const reverseInt = num => {
    // changing number to string
    let strNum = num.toString()
    // storing string 
    let reversed = ''

    // iterate through each character of the string
    for(let i of strNum) {
        //add the character to the empty string
        reversed = i + reversed
    }
    // if the number passed is less than 0, change it back to a negative and change the string back to a number.
    if ( num < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

console.log(reverseInt(15))
console.log(reverseInt(-924))