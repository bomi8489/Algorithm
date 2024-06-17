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

for (let i = 1; i <= n; i++) {
  tree[i] = []
}

for (let i = 1; i < n; i++) {
  tree[relationArr[i]].push(i + 1)
}

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

for (const [node, compliment] of data) {
  complimentArr[node] += compliment
}

bfs(1)

complimentArr.shift()
console.log(complimentArr.join(' '))