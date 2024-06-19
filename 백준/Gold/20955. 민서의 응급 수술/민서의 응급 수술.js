const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [n, m] = input.shift()
const parent = Array(n + 1).fill(0).map((_, i) => i)
const graph = Array.from(Array(n + 1), () => [])
const visited = Array(n + 1).fill(0)
let graphCount = 0
let cutCount = 0
input.sort((a, b) => a[0] - b[0])

const find = (node) => {
  if (parent[node] === node) return node
  const currentParent = find(parent[node])
  parent[node] = currentParent
  return currentParent
}

const union = (x, y) => {
  let xParent = find(x)
  let yParent = find(y)
  parent[yParent] = xParent
}

input.forEach(e => {
  const [x, y] = e

  if (find(x) === find(y)) cutCount++
  else union(x, y)
})

parent.forEach((e, i) => {
  if (parent[e] === i) graphCount++
})

console.log(cutCount + graphCount - 2)