/*
    Suppose you want to count the number of times a smaller string appears in a longer string.
    A straightforward apporach involves checking pairs of characters individually

    Psuedocode
    - loop over the longer string
    - loop over the shorter string
    - if the characters don't match, break out of inner loop
    - if the characters do match, keep going
    - if you complete the inner loop and find a match, 
      increment the count of matches
    - return count
*/

function basicSearchString(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count
}

console.log(basicSearchString('harry just loled', 'lol'))
console.log(basicSearchString('harry loled', 'lol'))