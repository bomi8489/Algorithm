const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const N = input.shift()
let arr = input.reverse()
let count = 0

for (let i = 1; i < N; i++) {
  while(arr[i] >= arr[i - 1]) {
    count++
    arr[i]--
  }
}

console.log(count)