const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N ] = input.shift()
const graph = Array.from(Array(N), () => Array(N).fill(0))

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][k] && input[k][j]) {
        input[i][j] = 1
      }
    }
  }
}

console.log(input.map(e => e.join(' ')).join('\n'))