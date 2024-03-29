/*

Write a function which takes in a string and returns 
counts of each character in the string

*/

/*

charCount('aaa'); === {a: 3}

charCount('hello') === {h:1, e:1, l: 2, o: 1}

charCount('Your Pin Numbers is 12354) ===

{
    1: 1,
    2: 1,
    3: 1,
    4:1 ,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1,
}
*/

function charCount2(str) {
    //make object to return at end
    let result = {}
    //loop over string, for each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
            //if the char is not a number/letter AND in object, add it and set value to 1
        } else {
            result[char] = 1
        }
    }
    //if character is something else (space, period, etc.) don't do anything
    //return object at end
    return result
}
console.log(charCount2('hello'))

//for alphanumberic 
// function charCount(str) {
//     let object = {}
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         if(/[a-z0-9]/.test(char)) {
//             if(object[char] > 0) {
//                 object[char]++
//             } else {
//                 object[char] = 1
//             }
//         }
//     }
//     return object
// }

//refactored 
function charCount(str) {
    let object = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            object[char] = ++object[char] || 1
        }
    }
    return object
}
console.log(charCount('my pin number is 123456'))

