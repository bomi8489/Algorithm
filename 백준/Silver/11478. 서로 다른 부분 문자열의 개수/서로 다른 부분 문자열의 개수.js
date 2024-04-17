const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('')

const stringObj = {}
let stringArr = input

stringArr.forEach((_, i) => {
  const restStr = stringArr.filter((_, idx) => idx >= i).reverse()
  let length = restStr.length
  let str = ''
  for (let i = 0; i < length; i++) {
    str += restStr.pop()
    stringObj[str] = str
  }
})

console.log(Object.values(stringObj).length)