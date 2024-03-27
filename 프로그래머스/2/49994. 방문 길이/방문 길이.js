function solution(dirs) {
    let currentPosition = [0, 0]
    let prev = []
    let next = []
    const visitedRoute = new Set()
    
    for (let i = 0; i < dirs.length; i++) {
        prev = JSON.parse(JSON.stringify(currentPosition))
        if (dirs[i] === 'U' && currentPosition[1] + 1 <= 5) {
            currentPosition[1]++
        } else if (dirs[i] === 'D' && currentPosition[1] - 1 >= -5) {
            currentPosition[1]--
        } else if (dirs[i] === 'L' && currentPosition[0] - 1 >= -5) {
            currentPosition[0]--
        } else if (dirs[i] === 'R' && currentPosition[0] + 1 <= 5) {
            currentPosition[0]++
        } else {
            continue
        }
        next = JSON.parse(JSON.stringify(currentPosition))
        visitedRoute.add([prev.join(''), next.join('')].sort().join(''))
    }
    
    return visitedRoute.size
}