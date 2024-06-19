const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')

const [ n, m ] = input[0].split(' ').map(Number)
const relationArr = input[1].split(' ').map(Number)
const data = input.slice(2, 2 + m).map(e => e.split(' ').map(Number))
const tree = {}
const complimentArr = Array(n + 1).fill(0)

// 트리 초기화
for (let i = 1; i <= n; i++) {
  tree[i] = []
}

// 입력 값 트리에 채우기
for (let i = 1; i < n; i++) {
  tree[relationArr[i]].push(i + 1)
}

// 1번 노드부터 시작해서 자신의 칭찬점수 직속 부하에게 더해주기
const bfs = (start) => {
  const queue = [start]
  let front = 0
  while (queue.length > front) {
    const node = queue[front++]
    for (const nextNode of tree[node]) {
        complimentArr[nextNode] += complimentArr[node]
        queue.push(nextNode)
    }
  }
}

// 각 사원이 받은 칭찬값 각 노드에 더해주기
for (const [node, compliment] of data) {
  complimentArr[node] += compliment
}

bfs(1)

complimentArr.shift()
console.log(complimentArr.join(' '))