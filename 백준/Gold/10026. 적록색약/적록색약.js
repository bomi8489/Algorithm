const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(e => e/e === 1 ? Number(e) : e)

const N = input.shift()
const picture = input.map(e => e.split(''))
const RGCBpicture = input.map(e => e.split('').map(el => el.replaceAll('G', 'R')))
const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let count = 0
let RGCBcount = 0 // red-green color blindness

const BFS = (position, pic, color) => {
  const queue = []
  queue.push(position)

  while (queue.length > 0) {
    const [x, y] = queue.shift()
    
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && pic[nx][ny] === color) {
        pic[nx][ny] = ''
        queue.push([nx, ny])
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (picture[i][j].length) {
      let color = picture[i][j]
      picture[i][j] = ''
      BFS([i, j], picture, color)
      count++
    }

    if (RGCBpicture[i][j].length) {
      let color = RGCBpicture[i][j]
      RGCBpicture[i][j] = ''
      BFS([i, j], RGCBpicture, color)
      RGCBcount++
    }
  }
}

console.log(count, RGCBcount)