const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

input[1].sort((a, b) => a - b)
let result = 0
let left = 1
let right = input[1].at(-1)
  
while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let count = input[1].reduce((acc, length) => acc + Math.floor(length / mid), 0)
    
    if (count >= input[0][0]) {
        result = mid
        left = mid + 1
    } else {
        right = mid - 1
    }
}

console.log(result)