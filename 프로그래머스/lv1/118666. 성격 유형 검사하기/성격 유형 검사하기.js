function solution(survey, choices) {
    let answer = 'RCJA';
    let typeArr = ['RT', 'CF', 'JM', 'AN'];
    let typeNum = [0, 0, 0, 0];
    
    survey.map((data, idx) => {
        if(choices[idx] > 4) {
            if(typeArr.includes(data)) typeNum[typeArr.indexOf(data)] += (choices[idx] - 4);
            else typeNum[typeArr.indexOf(data.split('').reverse().join(''))] -= (choices[idx] - 4);
        }
        else {
            if(typeArr.includes(data)) typeNum[typeArr.indexOf(data)] += (choices[idx] - 4);
            else typeNum[typeArr.indexOf(data.split('').reverse().join(''))] -= (choices[idx] - 4);
        }
    })
    
    if(typeNum[0] > 0) answer = answer.replace('R', 'T');
    if(typeNum[1] > 0) answer = answer.replace('C', 'F');
    if(typeNum[2] > 0) answer = answer.replace('J', 'M');
    if(typeNum[3] > 0) answer = answer.replace('A', 'N');
    
    return answer;
}