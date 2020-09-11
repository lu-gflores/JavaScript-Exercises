/*
write a function that passes a string as an argument and returns
the number of vowels in the string
*/

const findVowels = str => {
    //created variable for count vowels.
    let count = 0;
    //created an array for vowels both lowercase and uppercase
    const vowels= ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    //iterate through the string to find the vowels
    for(let i of str.toLowerCase()) {
        //if one of the vowels is in the string, we add 1 to the counter
        if(vowels.includes(i)){
            count++
        }
    }
    return count;
}

console.log(findVowels('Hey there friend!'))
console.log(findVowels('hEllO worLD'))
