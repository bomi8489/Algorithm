// function solution(s) {
//     var answer = s.split('');
//     for(let i=0; i<answer.length; i++){
//         if(i % 2 == 0)  answer[i] = answer[i].toUpperCase()
//         else answer[i] = answer[i].toLowerCase()
//     }
//     return answer.join('');
// }

function solution(s) {
    var answer = []
    s.split('').map((str, idx) => {
        if(idx % 2 == 0) answer[idx] = str.toUpperCase();
        else answer[idx] = str.toLowerCase()
    });
    return answer.join('');
}

console.log(solution("try hello world"));