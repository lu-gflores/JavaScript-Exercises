/*
Write a function that passes a string as an argument, removes the first and last letter, and
returns the remaining string.
If the string is 2 or fewer characters long, return the string as is
Ex: removeFirstLast('bonjour') === 'onjou'
    removeFirstLast('there') === 'her'
    removeFast('x') === 'x'
*/
const removeFirstLast = str => {
    if(str.length > 2) {
        return str.slice(1, str.length-1)
    }
    else if (str.length <= 2) {
        return str
    }
}
console.log(removeFirstLast('bonjour'))
console.log(removeFirstLast('there'))
console.log(removeFirstLast('x'))