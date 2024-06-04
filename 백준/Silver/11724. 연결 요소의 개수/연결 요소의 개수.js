const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N, M ] = input.shift()
const graph = Array.from(Array(N + 1), () => [])
const visited = Array(N + 1).fill(0)
let count = 0

input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

const dfs = (src) => {
  for (let i = 0; i < graph[src].length; i++) {
    let nextSrc = graph[src][i]

    if (!visited[nextSrc]) {
      visited[nextSrc] = 1
      dfs(nextSrc)
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i)
    count++
  }
}

console.log(count)