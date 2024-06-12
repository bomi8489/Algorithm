const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))

const [ N ] = input.shift()
const nodeArr = input[0]
const [ toDeleteNode ] = input[1]
const tree = {}
let count = 0

nodeArr.forEach((_, i) => {
  tree[i] = []
})

nodeArr.forEach((e, i) => {
  if (e !== -1) tree[e].push(i)
})

const dfs = (src) => {
  if (tree[src].length > 0) {
    let nextSrc = tree[src]
    if (tree[nodeArr[src]] !== undefined) tree[nodeArr[src]].splice(tree[nodeArr[src]].indexOf(src), 1)
    delete tree[src]
    for (let i = 0; i < nextSrc.length; i++) {
      dfs(nextSrc[i])
    }
  } else {
    if (tree[nodeArr[src]] !== undefined) tree[nodeArr[src]].splice(tree[nodeArr[src]].indexOf(src), 1)
    delete tree[src]
  }
}

dfs(toDeleteNode)

let arr = Object.keys(tree)
arr.map(e => {
  if (tree[e].length === 0) count++
})

console.log(count)