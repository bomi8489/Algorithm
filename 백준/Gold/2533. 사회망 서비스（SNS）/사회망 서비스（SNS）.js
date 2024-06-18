const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ n ] = input.shift()
const graph = Array.from(Array(n + 1), () => [])
const visited = Array(n + 1).fill(0)
const dp = Array.from(Array(n + 1), () => [0, 1])

input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

const dfs = (node) => {
  visited[node] = 1

  for (const nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode)
      dp[node][0] += dp[nextNode][1]
      dp[node][1] += Math.min(dp[nextNode][0], dp[nextNode][1])
    }
  }
}

dfs(1)

console.log(Math.min(dp[1][0], dp[1][1]))