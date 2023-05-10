function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b)
    while(score.length >= m){
        let popedArray = [];
        for(let j = 0; j < m; j++){
            popedArray.push(score.pop());
        }
        answer += popedArray[popedArray.length-1]*m;
    }
    return answer
}