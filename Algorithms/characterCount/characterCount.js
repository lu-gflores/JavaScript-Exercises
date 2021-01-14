/*
Write a function that passes two arguments, a character and a string, and counts the occurences of that character in the given string.
Solution is case-sensitive.
*/
const charCount = (chr, str) => {
    let count  = 0;
    for(let i in str) {
        if (chr === str[i]) count++;
    }
    return count;
}

console.log(charCount('a', 'Javascript'))
console.log(charCount('p',  'Pizza'))
console.log(charCount('d', 'Victorious'))