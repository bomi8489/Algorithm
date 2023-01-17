function solution(s) {
    let answer = [0, 0]
    while(s.length > 1) {
        answer[1] += s.split('').filter(data => data == 0).length
        s = s.split('').filter(data => data > 0).join('').length.toString(2);
        answer[0]++;
    }
    return answer
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));