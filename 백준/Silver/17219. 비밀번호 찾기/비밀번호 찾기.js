const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(e =>  e.split(' '))

const [M, N] = input.shift().map(Number)
let data = input
let siteObj = {}

for (let i = 0; i < M; i++) {
  siteObj[data[i][0]] = data[i][1]
}

for (let i = M; i < data.length; i++) {
  console.log(siteObj[data[i]])
}