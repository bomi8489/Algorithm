function solution(array, commands) {
    return commands.map(data => ([...array].slice(data[0]-1, data[1])).sort((a, b)=>a-b)[data[2]-1])
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))