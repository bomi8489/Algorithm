const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()

const arr = input.split('-').map(str => 
  str.split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
)

let answer = arr.shift() - arr.reduce((acc, cur) => acc + cur, 0)

console.log(answer)