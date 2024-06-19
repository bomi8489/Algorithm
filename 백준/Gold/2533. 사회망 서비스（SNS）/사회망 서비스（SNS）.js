const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ n ] = input.shift()
const graph = Array.from(Array(n + 1), () => [])
const visited = Array(n + 1).fill(0)

/*
dp 배열: 해당 노드 기준 자식 노드들의 얼리어답터 수의 합
각 노드마다
  x좌표 -> 해당 노드가 얼리어답터가 아닐경우 자식노드들의 얼리어답터 수의 합
  y좌표 -> 해당 노드가 얼리어답터일 경우 자식노드들의 얼리어답터 수의 합
*/
const dp = Array.from(Array(n + 1), () => [0, 1])

input.forEach(e => {
  const [x, y] = e
  graph[x].push(y)
  graph[y].push(x)
})

// 자식노드들의 얼리어답터 수의 합을 구해야 하므로 깊이 우선 탐색
const dfs = (node) => {
  visited[node] = 1

  for (const nextNode of graph[node]) {
    if (!visited[nextNode]) {
      // 자식노드들 dp 먼저 구하기
      dfs(nextNode)

      // 현재 노드가 얼리어답터가 아닌경우 -> 인접한 모든 자식노드가 얼리어답터여야 함
      dp[node][0] += dp[nextNode][1]
      /* 
        현재 노드가 얼리어답터가 아닌경우 -> 인접한 모든 자식노드가 얼리어답터이거나 아님
        그래서 자식 노드까지의 얼리어답터 최소값을 구함
      */
      dp[node][1] += Math.min(dp[nextNode][0], dp[nextNode][1])
    }
  }
}

dfs(1)

/* 
  최종적으로 루트 노드인 1번 노드가 얼리어답터인 경우 -> dp[1][0]
  1번 노드가 얼리어답터가 아닌 경우 -> dp[1][1]
  중에 더 작은 값 출력
*/
console.log(Math.min(dp[1][0], dp[1][1]))