const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

let T = Number(input.shift())
let idx = 0

for (let i = 0; i < T ; i++) {
  idx++
  let count = 0

  let [testA, testB] = [input[idx++].split(' ').map(Number), input[idx++].split(' ').map(Number)]
  testA.sort((a, b) => b - a)
  testB.sort((a, b) => b - a)

  for (let j = 0; j < testA.length; j++) {
    for (let k = 0; k < testB.length; k++) {
      if (testA[j] > testB[k]) {
        count += testB.length - k
        break
      }
    }
  }
  console.log(count)
}