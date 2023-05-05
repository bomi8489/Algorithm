function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 여벌의 체육복을 가지고 있는 학생 먼저 lost배열과 reserve배열에서 제거
    for(let i = 0; i < reserve.length; i++){
        if(lost.indexOf(reserve[i]) !== -1) {
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(reserve.indexOf(reserve[i]), 1);
            i--;
            answer++;
        }
    }
    
    reserve.map(stuNum => {
        // 여벌의 체육복이 있는 학생 번호-1번의 학생이 체육복이 없는 경우 lost 배열에서 제거
        if(lost.indexOf(stuNum-1) !== -1) {
            lost.splice(lost.indexOf(stuNum-1), 1);
            return answer++;
        }
        // 여벌의 체육복이 있는 학생 번호+1번의 학생이 체육복이 없는 경우 lost 배열에서 제거
        else if(lost.indexOf(stuNum+1) !== -1) {
            lost.splice(lost.indexOf(stuNum+1), 1);
            return answer++;
        }
    })
    return answer;
}