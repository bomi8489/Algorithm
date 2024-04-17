const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(e => e.split(' '))

const [S, E, Q] = input.shift().map(e => e.split(':').map(Number).reduce((a, b) => a * 100 + b))
const recordObj = {}
let count = 0

input.forEach(e => {
  let chatTime = e[0].split(':').map(Number).reduce((a, b) => a * 100 + b)
  // 채팅한 시간이 개강 총회 스트리밍이 끝난 후 라면, 애초에 기록하지말자
  if (chatTime <= Q) {
    if (recordObj[e[1]]) {
      recordObj[e[1]].push(chatTime)
    } else {
      recordObj[e[1]] = [chatTime]
    }
  }
})

const keys = Object.keys(recordObj)

keys.forEach(e => {
  let firstChat = recordObj[e][0]
  let lastChat = recordObj[e].at(-1)
  // 개강 총회를 시작하자마자 채팅을 쳤거나 개강 총회가 시작하기 이전에 채팅을 친 경우
  if (firstChat <= S) {
    // 개강 총회가 끝난 시간 이후 ~ 개강 총회 스트리밍이 끝난 시간 에 채팅을 쳤다면
    if (lastChat >= E && lastChat <= Q) {
      count++
    }
  }
})

console.log(count)