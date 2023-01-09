function solution(x, n) {
    return Array(n).fill(x).map((v, i) => v * (i+1))
}

console.log(solution(2, 5));
console.log(solution(-4, 2));