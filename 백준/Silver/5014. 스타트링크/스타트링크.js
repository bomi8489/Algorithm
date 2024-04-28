const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number)

const [floor, start, goal, up, down] = input
const floorArr = Array(floor).fill(0)
const move = [-down, up]
let arriveFlag = 0
let answer = 0

floorArr[start-1] = 1
floorArr[goal-1] = 2

const BFS = (param) => {
  const queue = []
  queue.push(param)

  while (!arriveFlag && queue.length > 0) {
    let [cur, count] = queue.shift()
    
    for (let i = 0; i < 2; i++) {
      let nextFloor = cur + move[i]
      if (nextFloor >= 0 && nextFloor < floorArr.length && floorArr[nextFloor] !== -1) {
        floorArr[nextFloor] += floorArr[cur]
        floorArr[cur] = -1
        queue.push([nextFloor, count + 1])
      }
      
      if (nextFloor === (goal - 1)) {
        answer = count + 1
        arriveFlag = 1
        break
      }
    }

  }
}

floorArr.forEach((e, index) => {
  if (e === 1) {
    BFS([index, 0])
  }
})

if (arriveFlag || start === goal) console.log(answer)
else console.log('use the stairs')