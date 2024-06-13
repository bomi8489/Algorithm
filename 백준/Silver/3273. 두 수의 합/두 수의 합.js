const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')

let n = input.shift()
let x = Number(input.pop())
const arr = input[0].split(' ').map(Number)
arr.sort((a, b) => a - b)
let count = 0

let left = 0
let right = arr.length - 1

while (left < right) {
  if (arr[left] + arr[right] > x) right--
  else {
    if (arr[left] + arr[right] === x) count++
    left++
  }
}

console.log(count)