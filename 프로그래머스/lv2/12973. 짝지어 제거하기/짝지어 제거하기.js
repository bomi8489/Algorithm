function solution(s) {
    let splitedString = s.split('');
    let answer = [];
    
    for(let i = 0; i<splitedString.length; i++){
        if(splitedString[i] !== (answer[answer.length-1] ?? '')) {
            answer.push(splitedString[i])
        }
        else answer.pop();
    }
    
    return answer.length ? 0 : 1;
}