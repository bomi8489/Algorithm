function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b)
    while(score.length >= m){
        let newArrary = [];
        for(let j = 0; j < m; j++){
            newArrary.push(score.pop());
        }
        answer += newArrary[newArrary.length-1]*m;
    }
    return answer
}