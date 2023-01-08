function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
console.log(solution("abcDEF"));