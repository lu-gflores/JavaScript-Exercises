/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
    string form a subsequence of characters in the second string. In other words, the function should check whether
    the characters in the first string appear somehwere in the second string, without their order changing!

    isSubsequence('hello', 'hello world') => true
    isSubsequence('sing', 'sting') => true
    isSubsequence('abc', 'acb') => false

*/

function isSubsequence(string1, string2) {
    //counter for the first string
    let count = 0
    // pointer index for second string
    let index = 0

    while (index < string2.length) {
        // if a char matches in both strings, add to the count
        if (string2[index] === string1[count]) count++
        //the count in the first string matches the length, return true
        if (count === string1.length) return true
        // iterate through second string
        index++
    }
    return false
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'string'))