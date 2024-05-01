const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(e => e/e === 1 ? Number(e) : e.split(' ').map(Number))

let computer = input.shift()
let pair = input.shift()
const graph = Array.from(Array(computer + 1), () => [])
const visited = Array(computer + 1).fill(0)
let count = 0

input.forEach(e => {
  graph[e[0]].push(e[1])
  graph[e[1]].push(e[0])
})

const dfs = (src) => {
  visited[src] = 1
  
  for (let i = 0; i < graph[src].length; i++) {
    const nextSrc = graph[src][i]
    
    if (!visited[nextSrc]) {
      count++
      dfs(nextSrc)
    }
  }
}

dfs(1)
console.log(count)