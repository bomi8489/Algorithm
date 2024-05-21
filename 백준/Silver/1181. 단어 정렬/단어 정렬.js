const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(e => e/e === 1 ? Number(e) : e)

let N = input.shift()
let setArr = [...new Set(input)]

setArr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length
  else if (a.length === b.length) {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
  }
})

console.log(setArr.join('\n'))