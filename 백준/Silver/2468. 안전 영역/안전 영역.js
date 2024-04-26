const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

const N = input.shift()
let local = input
let maxNum = Math.max(...local.map(e => Math.max(...e)))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let answer = []
let copyLocal = local.map(e => [...e])

const BFS = (position, map) => {
  const queue = []
  queue.push(position)

  while (queue.length > 0) {
    const [x, y] = queue.shift()

    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]]

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] > 0 && map[nx][ny]) {
        map[nx][ny] = 0
        queue.push([nx, ny])
      }
    }
  }
}

while (maxNum >= 0) {
  let count = 0
  let water = maxNum
  let tmp = copyLocal.map(e => [...e])
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      tmp[i][j] -= water
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (tmp[i][j] > 0) {
        tmp[i][j] = 0
        BFS([i, j], tmp)
        count++
      }
    }
  }

  answer.push(count)
  maxNum--
}

console.log(Math.max(...answer))