function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i <= number; i++) {
        let divisorNum = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                divisorNum++;
                if(i / j !== j) divisorNum++;
            }
        }
        if(divisorNum > limit) answer += power;
        else answer += divisorNum;
    }
    
    return answer;
}