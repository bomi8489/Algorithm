function solution(s) {
    let answer = s.split('');
    for(let i = 0; i < s.length; i++){
        if(answer[i] === answer[i+1])  answer = answer.splice(i, 2);
    }
    return answer.length ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("abaabac"))
console.log(solution("cdcd"));