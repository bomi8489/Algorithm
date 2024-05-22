const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()

let length = input.length
let arr = []

for (let i = 0; i < length; i++) {
  arr.push(input.slice(i, length))
}

arr.sort()

console.log(arr.join('\n'))