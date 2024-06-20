const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ v ] = input.shift()
const graph = Array.from(Array(v + 1), () => [])
const result = Array(v + 1).fill(0)

input.forEach(e => {
  const node = e.shift()
  for (let i = 0; i < e.length; i+=2) {
    if (e[i] !== -1) {
      graph[node].push([e[i], e[i + 1]])
    }
  }
})

const bfs = (node) => {
  const visited = Array(v + 1).fill(0)
  visited[node] = 1
  const queue = []
  queue.push([node, 0])
  let farthestNode = [0, 0]
  let front = 0

  while (queue.length > front) {
    let [node, distance] = queue[front++]
    if (farthestNode[1] < distance) farthestNode = [node, distance]
    
    for (const [nextNode, nextDistance] of graph[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = 1
        queue.push([nextNode, distance + nextDistance])
      }
    }
  }

  return farthestNode
}

console.log(bfs(bfs(1)[0])[1])