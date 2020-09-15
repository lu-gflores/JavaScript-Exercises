/*
Closures

Write a function that allows you to perform the action:
let addSix = createBase(6)
addSix(7) = 13
addSix(22) = 28

*/
const createBase = num => {
    return function(N) {
        return N +  num;
    };
}
let addSix = createBase(6);
console.log(addSix(21));
console.log(addSix(12));
