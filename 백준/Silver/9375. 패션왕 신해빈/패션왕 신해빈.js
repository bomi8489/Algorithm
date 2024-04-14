const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(e => {
      if (e/e === 1) return Number(e)
      else return e.split(' ')
    })

let testCase = input.shift()
let testCaseArr = input

while (testCase > 0) {
  let result = 1
  let testCaseObj = {}
  let N = testCaseArr.shift()
  for (let i = 0; i < N; i++) {
    if (testCaseObj[testCaseArr[i][1]]) testCaseObj[testCaseArr[i][1]].push(testCaseArr[i][0])
    else testCaseObj[testCaseArr[i][1]] = [testCaseArr[i][0]]
  }
  testCaseArr.splice(0, N)
  testCase--

  let clothesArr = Object.values(testCaseObj)
  let clothesLengthArr = []

  for (let i = 0; i < clothesArr.length; i++) {
    clothesLengthArr.push(clothesArr[i].length)
  }

  for (let i = 0; i< clothesLengthArr.length; i++) {
    result *= (1 + clothesLengthArr[i])
  }

  console.log(result - 1)
}