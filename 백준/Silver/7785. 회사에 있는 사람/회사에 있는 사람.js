const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(e => e.split(' '))

let n = input.shift()
const peopleMap = new Map(input.map(e => [e[0], e[1]]))
const tmp = []

peopleMap.forEach((_, e) => {
  if (peopleMap.get(e) === 'leave') peopleMap.delete(e)
  else tmp.push(e)
})

tmp.sort().reverse()
console.log(tmp.join('\n'))