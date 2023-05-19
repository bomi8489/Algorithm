function solution(s) {
    let answer = s.split('');
    let newArr = [answer[0]];

    for(let i = 1; i < answer.length; i++){
        if(answer[i] !== newArr[newArr.length-1]) newArr.push(answer[i])
        else newArr.pop();
    }
    
    return newArr.length ? 0 : 1;
}