function solution(s) {
    return (s[0] === '-') ? s.split('-')[1] * -1 : s * 1
}

console.log(solution("1234"));
console.log(solution("-4321"));