function solution(survey, choices) {
    // 초기값
    let answer = 'RCJA';
    let typeArr = ['RT', 'CF', 'JM', 'AN'];
    // typeArr의 인덱스와 매칭하는 배열로 인덱스 값이 양수면 각각 [R, C, J, A] 음수라면 [T, F, M, N]을 표현
    let typeNum = [0, 0, 0, 0];
    
    for(let i = 0; i < survey.length; i++){
        // 동의를 선택한 경우
        if(choices[i] > 4) {
            // survey의 값이 typeArr에 존재하는 값이라면 즉, 정렬되어 있다면
            if(typeArr.includes(survey[i]))
                // survey[i]에 매칭되는 typeNum 인덱스 값에 choices[i]-4 만큼 증가
                typeNum[typeArr.indexOf(survey[i])] += choices[i] - 4;
            // 존재하지 않는다면 즉, 정렬되어 있지 않다면
            else
                // survey[i]의 값을 정렬시키고 그에 매칭되는 typeNum 인덱스 값에 choices[i]-4 만큼 감소
                typeNum[typeArr.indexOf(survey[i].split('').reverse().join(''))] -= choices[i] - 4;
        }
        // 비동의를 선택한 경우
        else {
            // survey의 값이 typeArr에 존재하는 값이라면 즉, 정렬되어 있다면
            if(typeArr.includes(survey[i]))
                // survey[i]에 매칭되는 typeNum 인덱스 값에 choices[i]-4 만큼 증가
                typeNum[typeArr.indexOf(survey[i])] += choices[i] - 4;
            // 존재하지 않는다면 즉, 정렬되어 있지 않다면
            else
                // survey[i]의 값을 정렬시키고 그에 매칭되는 typeNum 인덱스 값에 choices[i]-4 만큼 감소
                typeNum[typeArr.indexOf(survey[i].split('').reverse().join(''))] -= choices[i] - 4;
        }
    }
    
    // 각 인덱스 값이 양수라면 디폴트값 변경
    if(typeNum[0] > 0) answer = answer.replace('R', 'T');
    if(typeNum[1] > 0) answer = answer.replace('C', 'F');
    if(typeNum[2] > 0) answer = answer.replace('J', 'M');
    if(typeNum[3] > 0) answer = answer.replace('A', 'N');
    
    return answer;
}