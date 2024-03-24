function solution(n, computers) {
    let answer = 0
    let checkSet = new Set()
    
    while(checkSet.size < n) {
        for (let i = 0; i < n; i++) {
            if (!checkSet.has(i)) {
                checkSet.add(i)
                BFS(i, computers, n, checkSet)
                answer++
            }
        }
    }
    
    return answer
}

const BFS = (index, computers, n, checkSet) => {
    const queue = []
    queue.push(index)
    
    while(queue.length > 0) {
        let src = queue.shift()
        for (let dest = 0; dest < n; dest++) {
            if (computers[src][dest] === 1 && src !== dest && !checkSet.has(dest)) {
                queue.push(dest)
                checkSet.add(dest)
            }
        }
    }
}