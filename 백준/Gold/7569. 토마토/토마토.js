const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const [M, N, H] = input.shift().split(' ').map(Number)
const dx = [-1, 1, 0, 0, 0, 0]
const dy = [0, 0, -1, 1, 0, 0]
const dz = [0, 0, 0, 0, -1, 1]
const queue = []
const boxes = Array.from(Array(H), () => Array.from(Array(N), () => Array.from(Array(M).fill(0))))

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    boxes[i][j] = input.shift().split(' ').map(Number)
  }
}

let unripeTomato = 0
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] == 0) unripeTomato++
      if (boxes[i][j][k] == 1) queue.push([i, j, k, 0])
    }
  }
}

let idx = 0
let answer = 0
while (queue.length > idx) {
  const [z, x, y, days] = queue[idx++]

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]
    const nz = z + dz[i]

    if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M && !boxes[nz][nx][ny]) {
      boxes[nz][nx][ny] = 1
      queue.push([nz, nx, ny, days + 1])
      unripeTomato--
    }
  }
  answer = days
}

console.log(unripeTomato ? -1 : answer)