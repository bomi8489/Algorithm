const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ N ] = input.shift()
const arrA = input.shift().sort((a, b) => a - b)
const arrB = input.shift().sort((a, b) => b - a)
let sum = 0

for (let i = 0; i < N; i++) {
  sum += (arrA[i] * arrB[i])
}

console.log(sum)