const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ n ] = input.shift()
const tree = {}
const parent = Array(n + 1).fill(0)
const visited = Array(n + 1).fill(0)
const inOrderResult = []
const result = []

input.forEach(e => {
  const [node, left, right] = e
  tree[node] = [left, right]
  if (left !== -1) parent[left] = node
  if (right !== -1) parent[right] = node
})

// 중위 순회
const inOrder = (node) => {
  const [left, right] = tree[node]

  if (left !== -1) inOrder(left)
  inOrderResult.push(node)
  if (right !== - 1) inOrder(right)
}

// 유사 중위 순회
const similarInOrder = (node) => {
  inOrder(1)
  const stack = [node]
  
  while (stack.length > 0) {
    const curNode = stack.pop()
    const [left, right] = tree[curNode]

    // 현재 위치한 노드의 왼쪽 자식 노드가 존재하고 아직 방문하지 않았다면, 왼쪽 자식 노드로 이동
    if (left !== -1 && !visited[left]) {
      result.push(curNode)
      stack.push(left)
      visited[left] = 1
    } 
    // 현재 위치한 노드의 오른쪽 자식 노드가 존재하고 아직 방문하지 않았다면, 오른쪽 자식 노드로 이동
    else if (right !== -1 && !visited[right]) {
      result.push(curNode)
      stack.push(right)
      visited[right] = 1
    } 
    // 현재 노드가 유사 중위 순회의 끝이라면, 유사 중위 순회를 종료
    else if (curNode === inOrderResult.at(-1)) {
      result.push(curNode)
      return
    } 
    // 부모 노드가 존재한다면, 부모 노드로 이동
    else if (parent[curNode]) {
      result.push(curNode)
      stack.push(parent[curNode])
    }
  }
}

similarInOrder(1)
console.log(result.length - 1)