const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ N ] = input.shift()

input.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1]
  return a[0] - b[0]
})

let answer = 0
answer += input[0][1] - input[0][0]
let prev = input[0][1]

for (let i = 1; i < N; i++) {
  const [left, right] = input[i]
  if (left <= prev && right > prev) {
    answer += (right - prev)
    prev = right
  }
  if (left > prev) {
    answer += (right - left)
    prev = right
  }
}

console.log(answer)