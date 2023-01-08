function solution(n) {
    var answer = 0;
    if(Math.sqrt(n) % 1 === 0) answer = (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
    else answer = -1;
    return answer;
}

console.log(solution(121));
console.log(solution(3));