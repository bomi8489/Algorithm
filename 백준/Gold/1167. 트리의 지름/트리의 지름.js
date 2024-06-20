const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ v ] = input.shift()
const graph = Array.from(Array(v + 1), () => [])

// 그래프 그리기
input.forEach(e => {
  const node = e.shift()
  for (let i = 0; i < e.length; i+=2) {
    if (e[i] !== -1) {
      // 각 노드에 가중치도 같이 저장: [노드번호, 거리]
      graph[node].push([e[i], e[i + 1]])
    }
  }
})

const bfs = (node) => {
  const visited = Array(v + 1).fill(0)
  visited[node] = 1
  const queue = []
  queue.push([node, 0])
  // 가장 먼 노드: [노드번호, 거리]
  let farthestNode = [0, 0]
  let front = 0

  while (queue.length > front) {
    let [node, distance] = queue[front++]

    // 가장 먼 노드와의 거리보다 현재노드의 거리가 더 멀다면 갱신
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

/*
모든 노드에서 거리를 구하면 시간, 메모리 둘다 초과 됨
따라서, 특정 점에서 가장 먼 노드를 구한 후 해당 점에서 다시 가장 먼 노드를 구함
*/
console.log(bfs(bfs(1)[0])[1])