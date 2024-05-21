const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(e => e/e === 1 ? Number(e) : e.split(' ').map(el => el/el === 1 ? Number(el) : el))

let N = input.shift()

input.sort((a, b) => b[1] - a[1])
input.sort((a, b) => {
  if (a[1] === b[1]) return a[2] - b[2]
})
input.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2]) return b[3] - a[3]
})
input.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    if (a[0] > b[0]) return 1
    else if (a[0] < b[0]) return -1
    else return 0
  }
})

const result = []
input.map(e => result.push(e[0]))

console.log(result.join('\n'))