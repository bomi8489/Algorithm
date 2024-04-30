const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [N, r, c] = input
let count = 0

const fn = (x, y, currentSquareLength) => {
  if (currentSquareLength === 2) {
    for (i = y; i < y+2; i++) {
      for (j = x; j < x+2; j++) {
        if (i === r && j === c) {
          console.log(count)
        }
        count++
      }
    }
  } else {
    // 현재 사각형 한 면의 길이의 절반 길이 half
    let half = Math.floor(currentSquareLength / 2)

    // 찾으려고 하는 목표 좌표가 각각 y, x 이상 half 미만일 시
    if ((y <= r && r < y + half) && (x <= c && c < x + half)) {
      fn(x, y, half)
    }
    // 찾으려고 하는 목표 좌표의 가로길이가 y 이상 y+half 미만이고 세로길이가 x+half 이상 x+현재사각형한변길이 미만일 시
    else if ((y <= r && r < y + half) && (x + half <= c && c < x + currentSquareLength)) {
      count += (half * half)
      fn(x + half, y, half)
    // 찾으려고 하는 목표 좌표의 가로길이가 y+half 이상 y+현재사각형한변길이 미만이고 세로길이가 x 이상 x+half 미만일 시
    } else if ((y + half <= r && r < y + currentSquareLength) && (x <= c && c < x + half)) {
      count += (half * half * 2)
      fn(x, y + half, half)
    } else {
      count += (half * half * 3)
      fn(x + half, y + half, half)
    }
  }
}

fn(0, 0, 2 ** N)