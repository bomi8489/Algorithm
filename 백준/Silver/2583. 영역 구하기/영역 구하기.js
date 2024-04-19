const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number))

const [M, N, K] = input.shift()
let data = input
let graph = []
let sectionCount = 0
let sectionArea = []

for (let i = 0; i < M; i++) {
  graph.push(Array(N).fill(1))
}

data.forEach(e => {
  let x = [e[0], e[2]]
  let y = [e[1], e[3]]

  for (let i = y[0]; i < y[1]; i++) {
    for (let j = x[0]; j < x[1]; j++) {
      graph[i][j] = 0
    }
  }
})

const BFS = (position, graph, count) => {
  const queue = []
  queue.push(position)
  
  while(queue.length > 0) {
    let [x, y] = queue.shift()
    if (graph[x][y] === 1) {
      graph[x][y]++
      count++

      if (y+1 < graph[0].length) queue.push([x, y+1])
      if (x+1 < graph.length) queue.push([x+1, y])
      if (y > 0) queue.push([x, y-1])
      if (x > 0) queue.push([x-1, y])
    }
  }

  return count
}

graph.forEach((y, i) => {
  let count = 0
  
  y.forEach((x, j) => {
    if (graph[i][j] === 1) {
      sectionArea.push(BFS([i, j], graph, count))
      sectionCount++
    }
  })
})

console.log(sectionCount)
console.log(sectionArea.sort((a, b) => a - b).join(' '))