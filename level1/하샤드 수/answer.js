function solution(x) {
    let num = String(x).split('').reduce((a, b) => +a + +b);
    return x % num === 0
}

console.log(solution("12"));
console.log(solution("442"));
console.log(solution("12340"));