const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

let N = Number(input)
const answer = []

const hanoi = (n, start, mid, end) => {
  if (n === 1) answer.push([start, end])
  else {
    hanoi(n - 1, start, end, mid)
    answer.push([start, end])
    hanoi(n - 1, mid, start, end)
  }
}
hanoi(N, 1, 2, 3)

console.log(answer.length)
console.log(answer.map(e => e.join(' ')).join('\n'))