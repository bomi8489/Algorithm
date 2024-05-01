const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(e => e/e === 1 ? Number(e) : e.split(' ').map(Number))

let N = input.shift()
let sqaure = [...input]
let white = 0
let blue = 0

const dfs = (x, y, currentSquareLength) => {
  let sum = 0

  for (let i = x; i < x + currentSquareLength; i++) {
    for (let j = y; j < y + currentSquareLength; j++) {
      sum += sqaure[i][j]
    }
  }
  
  if (sum === 0) white++
  else if (sum === (currentSquareLength * currentSquareLength)) blue++
  else {
    let halfLength = Math.floor(currentSquareLength / 2)

    dfs(x, y, halfLength)
    dfs(x + halfLength, y, halfLength)
    dfs(x, y + halfLength, halfLength)
    dfs(x + halfLength, y + halfLength, halfLength)
  }
}

dfs(0, 0, N)

console.log(white)
console.log(blue)