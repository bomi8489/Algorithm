const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let graphIdx = 0
let countArr = []
let front = 0

while (true) {
  const [n, m] = input[front++]
  if (n === 0 && m === 0) break

  const graph = Array.from(Array(n + 1), () => [])
  const visited = Array(n + 1).fill(0)
  let count = 0
  
  //그래프 그리기
  for (let i = 0; i < m; i++) {
    const [x, y] = input[front++]
    graph[x].push(y)
    graph[y].push(x)
  }

  const dfs = (node, prevNode) => {
    visited[node] = 1

    for (const nextNode of graph[node]) {
      if (!nextNode) return true
      else {
        if (!visited[nextNode]) {
          if (!dfs(nextNode, node, visited)) return false
        } else if (nextNode !== prevNode) return false
      }
    }
    return true
  }

  for (let i = 1; i < graph.length; i++) {
    let isTree = dfs(i, 0)
    if (isTree) {
      count++
      isTree = false
    }
  }

  countArr.push(count)
  graphIdx++
}

countArr.map((e, i) => {
  if (e === 0) console.log(`Case ${i + 1}: No trees.`)
  else if (e === 1) console.log(`Case ${i + 1}: There is one tree.`)
  else console.log(`Case ${i + 1}: A forest of ${e} trees.`)
})