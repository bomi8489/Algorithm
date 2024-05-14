const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

const N = input.shift()
let arr = input.map(e => e.split(' ').map(Number))

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1]
  else return a[0] - b[0]
})

arr = arr.map(e => e.join(' '))
console.log(arr.join('\n'))