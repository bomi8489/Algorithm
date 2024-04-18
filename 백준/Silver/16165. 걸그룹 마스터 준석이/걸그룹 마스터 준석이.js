const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

let [N, M] = input.shift().split(' ').map(Number)
const groupArr = input
const groupObj = {}

while(N > 0) {
  // 걸그룹 이름: [멤버 이름]
  groupObj[groupArr[0]] = groupArr.splice(2, +groupArr[1]).sort()
  // 걸그룹 이름, 멤버 숫자 삭제
  groupArr.splice(0, 2)
  N--
}

for (let i = 0; i < groupArr.length; i+=2) {
  if (+groupArr[i + 1] === 0) {
    const tmp = groupObj[groupArr[i]]
    for (let j = 0; j < tmp.length; j++) {
      console.log(tmp[j])
    }
  } else {
    const values = Object.values(groupObj)
    const keys = Object.keys(groupObj)
    for (let j = 0; j < values.length; j++) {
      if (values[j].includes(groupArr[i])) {
        console.log(keys[j])
      }
    }
  }
}