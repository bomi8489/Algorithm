const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('')

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let count = 0

for (let i = 0; i < input.length; i++) {
  let cur = input[i]
  arr[cur]++
}

let sixNineCount = Math.ceil((arr[6] + arr[9])/ 2)
arr[6] = sixNineCount
arr[9] = sixNineCount

console.log(Math.max(...arr))