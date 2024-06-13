const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N ] = input.shift()
const graph = Array.from(Array(N + 1), () => [])
const parentArr = Array(N + 1).fill(0)
const visited = Array(N + 1).fill(0)

input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

const dfs = (node) => {
  for (let i = 0; i < graph[node].length; i++) {
    const nextNode = graph[node][i]

    if (nextNode !== node && !visited[nextNode] && nextNode !== 1) {
      parentArr[nextNode] = node
      visited[nextNode] = 1
      dfs(nextNode)
    }
  }
}

dfs(1)
let answer = parentArr.splice(2)
console.log(answer.join('\n'))