const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N ] = input.shift()
const graph = Array.from(Array(N + 1), () => [])
const scoreArr = Array(N + 1).fill(0)
input.pop()

input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

const bfs = (node, visited) => {
  const queue = []
  queue.push(node)
  
  while (queue.length > 0) {
    let [curNode, count] = queue.shift()
    count++
    
    for (let i = 0; i < graph[curNode].length; i++) {
      const nextNode = graph[curNode][i]
      
      if (!visited[nextNode] && nextNode !== node[0]) {
        visited[nextNode] = 1
        queue.push([nextNode, count])
        scoreArr[node[0]] = count
      }
    }
  }
}

for (let i = 1; i <= N; i++) {
  const visited = Array(N + 1).fill(0)
  bfs([i, 0], visited)
}

let candidateScore = Math.min(...scoreArr.filter(e => e > 0))
let candidate = scoreArr.map((e, i) => {
  if (e === candidateScore) return i
}).filter(e => e !== undefined)

console.log(candidateScore, candidate.length)
console.log(candidate.join(' '))