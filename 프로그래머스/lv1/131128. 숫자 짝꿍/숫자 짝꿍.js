function solution(X, Y) {
    let answer = '';
    let xObj = {};
    let yObj = {};
    let answerObj = {};
    
    for(let i = 0; i < 10; i++) {
        xObj[i] = 0;
        yObj[i] = 0;
    }
    
    X = X.split('');
    Y = Y.split('');
    
    X.forEach(number => xObj[number]++);
    Y.forEach(number => yObj[number]++);
    
    Object.entries(xObj).forEach(([key, value]) => {
        if(yObj[key] !== 0) answerObj[key] = Math.min(value, yObj[key]);
    })
    
    Object.entries(answerObj).forEach(([key, value]) => {
        answer = answer.concat(key.repeat(value));
    })
    
    answer = answer.split('');
    answer = answer.sort((a, b) => b - a)
    if(answer.length === 0) return "-1";
    else if(answer[0] === "0") return "0";
    else return answer.join('');
}