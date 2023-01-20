function solution(d, budget) {
    let answer = 0;
    let bud = budget;
    let arr = d.filter(data => Math.max(...d) < data);
    return arr;
}

console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 2, 3, 3], 10))