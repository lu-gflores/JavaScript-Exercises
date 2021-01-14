/*
Write a problem that prints numbers 1 to 100. For multiples
of 3, print 'Fizz' instead. For multiples of 5, print 'Buzz' instead.
For numbers that are multiples of both 3 and 5, print 'FizzBuzz'
*/

const fizzBuzz = () => {
    //looping through 1 to 100
    for(let i = 1; i < 101; i++) {
        // if i is a multiple of 3 and 5
        if(i % 15 === 0 ) {
            console.log('FizzBuzz')
        }
        // if i is a multiple of 5
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        // if i is a multiple of 3
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        //if is NOT a multiple of 3 or 5, then print the number instead.
        else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz())