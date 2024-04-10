const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

const [A, B] = input.shift()
const setA = input[0].sort((a, b) => a - b)
const setB = input[1].sort((a, b) => a - b)
let result = []

for (let i = 0; i < setA.length; i++) {
  let left = 0
  let right = setB.length - 1
  let truth = true

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (setA[i] === setB[mid]) {
      truth = false
      break
    } else if (setA[i] > setB[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  if (truth) result.push(setA[i])
}

console.log(result.length)
if (result.length) console.log(result.join(' '))