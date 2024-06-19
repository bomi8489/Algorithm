/* 
- 유니온파인드 알고리즘
  그래프 알고리즘으로 두 노드가 같은 그래프에 속해있는지 판별하는 알고리즘
*/

const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [n, m] = input.shift()
const parent = Array(n + 1).fill(0).map((_, i) => i)
let graphCount = 0
let cutCount = 0
input.sort((a, b) => a[0] - b[0])

// 부모 찾기 or 그룹 찾기
const find = (node) => {
  // 현재 노드의 부모가 현재 노드와 같은경우
  if (parent[node] === node) return node

  /* 
  현재 노드의 부모 노드를 부모 노드의 부모 노드로 설정
  단지 `return find(parent[node])` 를 하면 최악의 경우 편향트리가 생성되어 시간복잡도에서 손해
  */
  const currentParent = find(parent[node])
  parent[node] = currentParent
  return currentParent
}

// 결합
const union = (x, y) => {
  let xParent = find(x)
  let yParent = find(y)
  if (xParent < yParent) parent[yParent] = xParent
  else parent[xParent] = yParent
}

input.forEach(e => {
  const [x, y] = e
  // x와 y의 부모가 같은 경우 결합하게 되면 사이클이 생기므로 자른다
  if (find(x) === find(y)) cutCount++
  else union(x, y)
})

parent.forEach((e, i) => {
  // 부모 노드가 적힌 배열에서 자기자신을 부모로 가진 노드가 해당 그래프의 루트
  if (parent[e] === i) graphCount++
})

console.log(cutCount + graphCount - 2)