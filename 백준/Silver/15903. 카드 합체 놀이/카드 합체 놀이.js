const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(e => e.split(' ').map(Number))

class PeriorityQueue {
  constructor() {
    this.heap = [null]
  }

  size() {
    return this.heap.length - 1
  }

  add(number) {
    if (this.size() === 0) {
      this.heap.push(number)
      return
    }

    this.heap.push(number)

    let currentIdx = this.size()
    let parentIdx = Math.floor(currentIdx / 2)

    while (this.heap[currentIdx] < this.heap[parentIdx] && currentIdx !== 1) {
      [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]]

      currentIdx = parentIdx
      parentIdx = Math.floor(currentIdx / 2)
    }
  }

  pop() {
    const currentSize = this.size()

    if (currentSize === 0) {
      return -1
    }

    if (currentSize === 1) {
      return this.heap.pop()
    }

    const min = this.heap[1]
    this.heap[1] = this.heap.pop()

    let currentIdx = 1
    let leftChildIdx = currentIdx * 2
    let rightChildIdx = currentIdx * 2 + 1

    // 자식이 없는 경우
    if (!this.heap[leftChildIdx]) {
      return min
    }

    // 자식이 하나인 경우
    if (!this.heap[rightChildIdx]) {
      if (this.heap[currentIdx] > this.heap[leftChildIdx]) {
        this.swap(currentIdx, leftChildIdx)
      }
      return min
    }

    // 자식이 둘 이상인 경우
    while (this.heap[leftChildIdx] < this.heap[currentIdx] || this.heap[rightChildIdx] < this.heap[currentIdx]) {
      const minIdx = this.heap[leftChildIdx] > this.heap[rightChildIdx] ? rightChildIdx : leftChildIdx

      this.swap(currentIdx, minIdx)
      currentIdx = minIdx
      leftChildIdx = currentIdx * 2
      rightChildIdx = currentIdx * 2 + 1
    }

    return min
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}

let [n, m] = input.shift()
const heap = new PeriorityQueue()
input.shift().map(BigInt).forEach(n => heap.add(n))

for (let i = 0; i < m; i++) {
  const n1 = heap.pop()
  const n2 = heap.pop()
  const sum = n1 + n2
  heap.add(sum)
  heap.add(sum)
}

let answer = heap.heap.filter(e => e !== null).reduce((acc, cur) => acc + cur, 0n)

console.log(answer.toString())