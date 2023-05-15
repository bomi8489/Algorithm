function solution(new_id) {
    let firstReg = /[A-Z]/;
    let secondReg = /[\{\}\[\]\/?,:\)*~!^\+<>@\#$%&\=\(]/;
    
    // 1단계
    let answer = new_id.split('').map(letter => {
        if(firstReg.test(letter)) return letter.toLowerCase();
        else return letter;
    }).join('');
    
    // 2단계
    answer = answer.split('').map(letter => {
        if(secondReg.test(letter)) return '';
        else return letter;
    }).join('');
    
    // 3단계
    while(answer.includes('..')){
        answer = answer.replace('..', '.');
    }
    
    // 4단계
    if(answer[0] === '.') answer = answer.split('').filter((_, idx) => idx !== 0).join('');
    if(answer.at(-1) === '.') answer = answer.split('').filter((_, idx) => idx !== answer.length-1).join('');
    
    // 5단계
    if(answer.length === 0) answer += 'a';
    
    // 6단계
    if(answer.length > 15) {
        answer = answer.substr(0, 15);
        if(answer.at(-1) === '.') answer = answer.split('').filter((_, idx) => idx !== answer.length-1).join('');
    }
    
    // 7단계
    if(answer.length < 3){
        while(answer.length < 3) {
            answer += answer[answer.length-1];
        }
    }
    
    console.log(answer)
    return answer;
}