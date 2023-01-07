function solution(n)
{
    var answer = 0;
    String(n).split('').map(data => answer += parseInt(data));
    return answer;
}

console.log(solution(123));
console.log(solution(987));