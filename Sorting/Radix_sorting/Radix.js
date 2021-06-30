//helper functions
//returns the digitst in the num at the given place value (courtesty of stack overflow)
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

//returns the number of digits of num (courtsey of stack overflow)
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log(10(Math.abs(num)))) + 1
}
//returns the number of digits in the largest numbers in the list
function mostDigits(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        //sets the max digits to equal the maximum between the current value of max and the digit count
        max = Math.max(max, digitCount(arr[i]))
    }
    return max
}

//Radix sort function
function radixSort(nums) {

}