// create a function that repeats each character in a string n times
// repeat('mice', 5) => 'mmmmmiiiiiccccceeeee'
// repeat('stop', 1) => 'stop'

const repeatLetter = (str, n) => {
    if (n === 1) return str;
    return str.split('').map(item => item.repeat(n)).join('')
}

console.log(repeatLetter('Hello', 3))
console.log(repeatLetter('Human', 5))
console.log(repeatLetter('Good bye', 1))