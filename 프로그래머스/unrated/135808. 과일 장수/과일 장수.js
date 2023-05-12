function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);
    while(score.length >= m) {
        let initArray = [];
        for(let i = 0; i < m; i++){
            initArray.push(score.pop());
        }
        answer += initArray[initArray.length-1]*m;
    }
    return answer
}