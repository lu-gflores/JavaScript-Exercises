/*
Write a problem that prints numbers 1 to 100. For multiples
of 3, print 'Fizz' instead. For multiples of 5, print 'Buzz' instead.
For numbers that are multiples of both 3 and 5, print 'FizzBuzz'

*/

const fizzBuzz = () => {
    for(let i = 1; i < 101; i++) {
        if(i % 15 === 0 ) {
            console.log('FizzBuzz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz())