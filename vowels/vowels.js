/*
write a function that passes a string as an argument and returns
the number of vowels in the string
*/

const findVowels = str => {
    let count = 0;
    const vowels= ['a', 'e', 'i', 'o', 'u']
    for(let i of str.toLowerCase()) {
        if(vowels.includes(i)){
            count++
        }
    }
    return count;
}

console.log(findVowels('Hey there friend!'))
