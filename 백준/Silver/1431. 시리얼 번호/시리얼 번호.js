const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

const N = input.shift()

input.sort((a, b) => {
  if (String(a).length !== String(b).length) {
    return String(a).length - String(b).length
  }
})

input.sort((a, b) => {
  if (String(a).length === String(b).length) {
    let aNumSum = String(a).split('').filter(e => e/e === 1).map(Number).reduce((acc, cur) => acc + cur, 0)
    let bNumSum = String(b).split('').filter(e => e/e === 1).map(Number).reduce((acc, cur) => acc + cur, 0)

    if (aNumSum === bNumSum) {
      if (a < b) return -1
      else if (a > b) return 1
      else return 0
    } else {
      return aNumSum - bNumSum 
    }
  }
})

console.log(input.join('\n'))