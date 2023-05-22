function solution(survey, choices) {
    let answer = 'RCJA';
    let typeArr = ['RT', 'CF', 'JM', 'AN'];
    let typeNum = [0, 0, 0, 0];
    
    for(let i = 0; i < survey.length; i++){
        if(choices[i] > 4) {
            if(typeArr.includes(survey[i]))
                typeNum[typeArr.indexOf(survey[i])] += choices[i] - 4;
            else
                typeNum[typeArr.indexOf(survey[i].split('').reverse().join(''))] -= choices[i] - 4;
        }
        else {
            if(typeArr.includes(survey[i]))
                typeNum[typeArr.indexOf(survey[i])] += choices[i] - 4;
            else
                typeNum[typeArr.indexOf(survey[i].split('').reverse().join(''))] -= choices[i] - 4;
        }
    }
    
    if(typeNum[0] > 0) answer = answer.replace('R', 'T');
    if(typeNum[1] > 0) answer = answer.replace('C', 'F');
    if(typeNum[2] > 0) answer = answer.replace('J', 'M');
    if(typeNum[3] > 0) answer = answer.replace('A', 'N');
    
    return answer;
}