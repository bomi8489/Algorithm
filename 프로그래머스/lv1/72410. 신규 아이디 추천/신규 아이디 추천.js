function solution(new_id) {
    let answer = '';
    let firstReg = /[A-Z]/;
    let secondReg = /[\{\}\[\]\/?,:\)*~!^\+<>@\#$%&\=\(]/g;
    
    // 1단계
    answer = new_id.toLowerCase();
    
    // 2단계
    answer = answer.replaceAll(secondReg, "");
    
    // 3단계
    while(answer.includes('..')){
        answer = answer.replace('..', '.');
    }
    
    // 4단계
    answer = answer.replace(/^\.|\.$/g, '');
    
    // 5단계
    if(answer.length === 0) answer += 'a';
    
    // 6단계
    if(answer.length > 15) {
        answer = answer.substr(0, 15);
        answer = answer.replace(/\.$/, '');
    }
    
    // 7단계
    if(answer.length < 3){
        while(answer.length < 3) {
            answer += answer[answer.length-1];
        }
    }
    
    return answer;
}