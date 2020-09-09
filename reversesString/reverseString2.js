/*
Write a function that takes in a string as an argument and returns the reverse of the string as the output
WITHOUT USING the reverse method!
*/

const reverseString = (str) => {
    // stores the new string
    let reversed = ''
    
    //loop through each character in the string
    for(let i of str) {
        //add the start of the string reversed
        reversed = i + reversed
    }

    return reversed;
}
console.log(reverseString('Hey There World!'))