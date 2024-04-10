const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()

const [N, C, ...data] = input
    .trim()
    .split(/\s/)
    .map(Number)
data.sort((a, b) => a - b)

let left = 1
let right = data[data.length - 1]

while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    
    let count = 1
    let prev = data[0]
    for (const cur of data) {
        if (cur - prev < mid) continue
        prev = cur
        count++
    }
    
    if (count < C) right = mid - 1
    else left = mid + 1
}

console.log(right)