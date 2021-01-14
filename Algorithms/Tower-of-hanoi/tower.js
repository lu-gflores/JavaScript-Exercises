/* In the tower of hanoi, there are three towers. The objective is to move all disks to tower #3.
The catch is that you cannot place a larger disk onto the smaller disk. More about the game:
https://www.tutorialspoint.com/data_structures_algorithms/tower_of_hanoi.htm


Create a function that takes a number of disks as an argument and return the minimum amount of steps to complete the game.
tower(3) => 7
tower(5) => 31
*/

const towerHanoi = (disks) => {
    return Math.pow(2, disks) - 1;
}
console.log(towerHanoi(3))
console.log(towerHanoi(6))