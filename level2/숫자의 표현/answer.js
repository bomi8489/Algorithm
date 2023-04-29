// function solution(n) {
//     let answer = 0;
//     let count = 0;
//     let numArr = Array(n).fill(1).map((data, idx) => data + idx);
//     numArr.map(data => {
//         for(let i = data-1; i < n; i++){
//             if(answer + numArr[i] === n) {
//                 count++;
//                 answer = 0;
//                 break;
//             }
//             else answer += numArr[i];
//         }
//         answer = 0;
//     })
//     return count;
// }

function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if((i%2 !== 0 && Number.isInteger(n/i)) || (i%2 === 0 && !Number.isInteger(n/i))) {
            if(Number.isInteger(n/i*2) && (n/i - Math.floor(i/2) > 0)) {
                count++
            }
        }
    }
    return count;
}

console.log(solution(15));
console.log(solution(20));