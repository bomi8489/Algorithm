function solution(num) {
    var answer = '';
    if(num % 2 === 0) answer = "Even";
    else if(num % 2 !== 0 ) answer = "Odd";
    return answer;
}

console.log(solution(3));
console.log(solution(4));