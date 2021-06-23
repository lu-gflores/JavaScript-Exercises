/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the ltters of another such as cinema, formed from iceman.

*/

function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) return false;

    let count1 = {};
    let count2 = {};

    for (let i of str1) {
        count1[i] = (count1[i] || 0) + 1;
    }
    for (let i of str2) {
        count2[i] = (count2[i] || 0) + 1;
    }
    for (let key in count1) {
        if (count2[key] !== count1[key]) {
            return false;
        }
    }
    return true;
}