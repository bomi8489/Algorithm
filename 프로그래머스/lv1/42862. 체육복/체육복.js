function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a, b) => a - b)
    reserve.sort((a, b) => a - b)
    
    for(let i = 0; i < reserve.length; i++){
        if(lost.indexOf(reserve[i]) !== -1) {
            lost.splice(lost.indexOf(reserve[i]), 1)
            reserve.splice(reserve.indexOf(reserve[i]), 1)
            i--
            answer++
        }
    }
    reserve.map(stuNum => {
        if(lost.indexOf(stuNum-1) !== -1) {
            lost.splice(lost.indexOf(stuNum-1), 1)
            return answer++
        }
        else if(lost.indexOf(stuNum+1) !== -1) {
            lost.splice(lost.indexOf(stuNum+1), 1)
            return answer++
        }
    })
    return answer;
}