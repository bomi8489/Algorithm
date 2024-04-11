const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

const [M, N] = input.shift()
const universeSet = input
let tmp = []
const arr = []
let count = 0

for (let i = 0; i < M; i++) {
  tmp = JSON.parse(JSON.stringify(universeSet[i])).sort((a, b) => a - b)
  arr[i] = JSON.parse(JSON.stringify(universeSet[i]))

  for (let j = 0; j < N; j++) {
    let left = 0
    let right = N - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (tmp[mid] <= arr[i][j]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    arr[i][j] = left
  }
}

for (let i = 0; i < M; i++) {
  let flag = 1
  for (let j = i + 1; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (arr[i][k] !== arr[j][k]) flag = 0
    }
    count += flag
    flag = 1
  }
}

console.log(count)