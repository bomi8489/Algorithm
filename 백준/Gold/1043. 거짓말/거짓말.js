const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N, M ] = input.shift()
let knowTruth = input.shift()
let knowTruthNum = knowTruth.shift()
const isKnowTruth = Array(N + 1).fill(0)
const graph = Array.from(Array(N + 1), () => [])
const visited = Array(N + 1).fill(0)
let count = 0

input.forEach(e => {
  let num = e.shift()
  if (num > 1) {
    for (let i = 0; i < num; i++) {
      const cur = e[i]
      const arr = [...e].filter(el => el !== cur)
      arr.map(element => {
        if (!graph[cur].includes(element)) {
          graph[cur].push(element)
        }
      })
    }
  }
})

// 진실을 아는 사람
knowTruth.forEach(e => {
  isKnowTruth[e] = 1
})

const dfs = (src) => {
  for (let i = 0; i < graph[src].length; i++) {
    const nextSrc = graph[src][i]

    if (!visited[nextSrc]) {
      visited[nextSrc] = 1
      isKnowTruth[nextSrc] = 1
      dfs(nextSrc)
    }
  }
}

knowTruth.forEach(e => {
  dfs(e)
})

input.forEach(e => {
  let flag = 0
  for (let i = 0; i < e.length; i++) {
    let cur = e[i]
    if (!isKnowTruth[cur]) {
      flag = 1
    }
    else flag = 0
  }
  if (flag) count++
})

console.log(count)