function solution(d, budget) {
    return d.sort((a, b) => a - b).filter(data => (budget -= data) >= 0).length
}

console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 2, 3, 3], 10))
console.log(solution([10,3,2,7,11], 15))
console.log(solution([6, 7, 3, 8, 6], 10))
console.log(solution([1, 1, 2, 2, 1, 1], 20))