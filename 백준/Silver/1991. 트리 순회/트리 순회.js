const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' '))

const [ N ] = input.shift()
const answer = ['', '', '']
const tree = {}

input.forEach(e => {
  const [node, left, right] = e
  tree[node] = [left, right]
})

const preOrder = (node) => {
  if (node === '.') return
  const [left, right] = tree[node]

  answer[0] += node
  preOrder(left)
  preOrder(right)
}

const inOrder = (node) => {
  if (node === '.') return
  const [left, right] = tree[node]

  inOrder(left)
  answer[1] += node
  inOrder(right)
}

const postOrder = (node) => {
  if (node === '.') return
  const [left, right] = tree[node]

  postOrder(left)
  postOrder(right)
  answer[2] += node
}

preOrder('A')
inOrder('A')
postOrder('A')

console.log(answer.join('\n'))