function solution(n) {
    let numOfOne = n.toString(2).split('').filter(data => data === '1').length;
    for(let answer = n+1; ; answer++) {
        if(answer.toString(2).split('').filter(data => data === '1').length === numOfOne) return answer;
    }
}

console.log(solution(78))
console.log(solution(15))