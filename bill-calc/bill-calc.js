const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

//calculates the total for each bill passed
const calcTip = function (bill) {
    //if the bill is between $50 and $300, the tip will be 15%. If not, tip is 2-%
    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
    return tip + bill;
}

//looping though the bills array
for (let i = 0; i < bills.length; i++) {
    //pass the index of each bill to calcTip
    const tip = calcTip(bills[i])
    //pushs the tip amount of each bill in the tips array
    tips.push(tip)
    //pushes the total of each bill to the totals array.
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)
