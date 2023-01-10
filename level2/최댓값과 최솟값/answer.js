function solution(s) {
    var answer = s.split(' ').map(v => +v);
    return String(Math.min(...answer)) + ' ' + String(Math.max(...answer));
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));