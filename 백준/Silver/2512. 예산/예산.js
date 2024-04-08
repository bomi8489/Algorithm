const input = require('fs')
    .readFileSync(0, "utf-8")
    .toString()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

let totalBudget = input[2][0]
let request = input[1].sort((a, b) => a - b)
let result = 0
let left = 1
let right = request.at(-1)

while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    let sum = request.reduce((acc, budget) => {
        if (budget > mid) return acc + mid
        else return acc + budget
    }, 0)

    if (totalBudget >= sum) {
        if (mid > result) result = mid
        left = mid + 1
    } else {
        right = mid - 1
    }
}

console.log(result)