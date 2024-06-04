const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N, M, V ] = input.shift()
const graph = Array.from(Array(N + 1), () => [])
const dfsVisited = Array(N + 1).fill(0)
const bfsVisited = Array(N + 1).fill(0)
const dfsArr = [V]
const bfsArr = [V]


input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

for (let i = 0; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b)
}

const dfs = (node) => {
  dfsVisited[node] = 1
  for (let i = 0; i < graph[node].length; i++) {
    const nextNode = graph[node][i]
    
    if (!dfsVisited[nextNode]) {
      dfsArr.push(nextNode)
      dfsVisited[nextNode] = 1
      dfs(nextNode)
    }
  }
}

const bfs = (node) => {
  bfsVisited[node] = 1
  const queue = [node]

  while(queue.length > 0) {
    const curNode = queue.shift()

    for (let i = 0; i < graph[curNode].length; i++) {
      const nextNode = graph[curNode][i]

      if (!bfsVisited[nextNode]) {
        bfsArr.push(nextNode)
        bfsVisited[nextNode] = 1
        queue.push(nextNode)
      }
    }
  }
}

dfs(V)
bfs(V)

console.log(dfsArr.join(' '))
console.log(bfsArr.join(' '))