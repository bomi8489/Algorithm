function solution(A,B){
    A.sort((a, b) => a - b)   // 오름차순
    B.sort((a, b) => b - a)   // 내림차순
    return A.reduce((cal, cur, idx) => cal + cur * B[idx], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));