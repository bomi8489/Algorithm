const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' '))

const [ N ] = input.shift()

for (let i = 0; i < N; i++) {
  for (let j = 0; j < 2; j++) {
    input[i][j] = input[i][j].split('').sort().join('')
  }
}

input.map(e => {
  if (e[0] === e[1]) console.log('Possible')
  else console.log('Impossible')
})