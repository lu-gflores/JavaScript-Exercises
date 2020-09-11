/*
Write a function that passes a string as an argument and
returns the number of syllables the string has.

Ex: numSyllables('beau-ti-ful') === 3
    numSyllables('hel-lo') === 2
    numSyllables('gra-ti-tude') === 3
*/
const numSyllables = str => {
    return str.split('-').length
}

console.log(numSyllables('Hel-lo'));
console.log(numSyllables('for-get-ful'))
console.log(numSyllables('in-sig-ni-a'))