const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e/e === 1 ? Number(e) : e.split(' ').map(Number))

let [N, C] = input.shift()
let arr = input.shift()
const obj = {}

arr.forEach((e, i) => {
  let cnt = 1
  if (obj[e]) obj[e][0]++
  else {
    obj[e] = [cnt]
    obj[e].push(i)
  }
})

let resultArr = Object.entries(obj)

arr.sort((a, b) => {
  if (obj[a][0] !== obj[b][0]) return obj[b][0] - obj[a][0]
})
arr.sort((a, b) => {
  if (obj[a][0] === obj[b][0]) return obj[a][1] - obj[b][1]
})

console.log(arr.join(' '))