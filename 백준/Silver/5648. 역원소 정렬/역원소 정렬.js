const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .replaceAll('\n', ' ')
    .split(' ')
    .filter(e => e !== '')

const n = input.shift()

const arr = input.map(number => parseInt(number.split('').reverse().join(''))).sort((a, b) => a - b)
arr.map(e => console.log(e))