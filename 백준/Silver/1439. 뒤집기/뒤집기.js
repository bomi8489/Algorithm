const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()

const arr = input.split('').map(Number)

let zeroCnt = 0
let oneCnt = 0

let sum = arr.reduce((acc, cur) => acc + cur, 0)

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    if (i === 0 && arr[i] === 0) zeroCnt++
    if (i > 0 && arr[i] !== arr[i - 1]) zeroCnt++
  }

  if (arr[i] === 1) {
    if (i === 0 && arr[i] === 1) oneCnt++
    if (i > 0 && arr[i] !== arr[i - 1]) oneCnt++
  }
}

sum === arr.length || sum === 0 ? console.log(0) : console.log(Math.min(...[zeroCnt, oneCnt]))