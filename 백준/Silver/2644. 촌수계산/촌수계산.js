const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(e => e/e === 1 ? Number(e) : e.split(' ').map(Number))

let n = input.shift()
let [a, b] = input.shift()
let m = input.shift()
const famGraph = Array.from(Array(n+1), () => [])
const visited = Array(n+1).fill(0)

input.forEach(e => {
  famGraph[e[0]].push(e[1])
  famGraph[e[1]].push(e[0])
})

const dfs = (src, dest, count) => {
  visited[src] = 1
  if (src === dest) {
    console.log(count)
    return
  }

  for (let i = 0; i < famGraph[src].length; i++) {
    const nextSrc = famGraph[src][i]

    if (!visited[nextSrc]) {
      dfs(nextSrc, dest, count + 1)
    }
  }
}

dfs(a, b, 0)

if (!visited[b]) console.log(-1)