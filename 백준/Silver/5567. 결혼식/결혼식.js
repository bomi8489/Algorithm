const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

let [ N ] = input.shift()
let [ M ] = input.shift()
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0))
const visited = Array(N + 1).fill(0)
const friendsArr = []

input.forEach(e => {
  let [a, b] = e
  graph[a][b] = 1
  graph[b][a] = 1
})

graph[1].forEach((e, i) => {
  if (e === 1 && i !== 1) {
    visited[i] = 1
    friendsArr.push(i)
  }
})

for (let i = 0; i < friendsArr.length; i++) {
  const friend = friendsArr[i]
  graph[friend].forEach((e, idx) => {
    if (!visited[idx] && e === 1 && idx !== 1) {
      visited[idx] = 1
    }
  })
}

let answer = visited.reduce((acc, cur) => acc + cur, 0)
console.log(answer)