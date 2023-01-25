// 초안
// function solution(n, arr1, arr2) {
//     let array1 = arr1.map(data => {
//         return (data.length !== n) ? '0'+data.toString(2) : data.toString(2)
//     });
//     // let array2 = arr2.map(data => {
//     //     return (data.length !== 6) ? +'0'+data.toString(2) : data.toString(2)
//     // });
//     return [array1];
// }

// 1차 수정
// function solution(n, arr1, arr2) {
//     let array1 = arr1.map((data, idx) => (data | arr2[idx]).toString(2).split(''))
//     let array2 = array1.map(data => data.map(v => v.replace(/1/g, '#')))
//     return array2.map(data => data.map(v => v.replace(/0/g, ' ')).join(''))
// }

// 2차 수정
// function solution(n, arr1, arr2) {
//     let sumArr = arr1.map((data, idx) => (data | arr2[idx]).toString(2).split(''))
//     let lengthCheck = sumArr.map(data => (data.length !== n) ? '0'+data.join('') : data.join(''))
//     let answer = lengthCheck.map(data => data.replace(/1/g, '#'))
//     return answer.map(data => data.replace(/0/g, ' '))
// }

// 3차 수정
// function solution(n, arr1, arr2) {
//     let sumArr = arr1.map((data, idx) => (data | arr2[idx]).toString(2))

//     for(let i = 0; i<sumArr.length; i++){
//         const restLength = n-sumArr[i].length
//         for(let j = 0; j<restLength; j++){
//             sumArr[i] = '0'+sumArr[i]
//             console.log(sumArr[1].length)
//         }
//     }
//     let answer = sumArr.map(data => data.replace(/1/g, '#'))
//     return answer.map(data => data.replace(/0/g, ' '))
// }

// 4차 수정 (효율성 문제 있을듯함)
// function solution(n, arr1, arr2) {
//     let sumArr = arr1.map((data, idx) => (data | arr2[idx]).toString(2))
//     for(let i = 0; i<sumArr.length; i++){
//         const restLength = n-sumArr[i].length
//         for(let j = 0; j<restLength; j++){
//             sumArr[i] = '0'+sumArr[i]
//             console.log(sumArr[1].length)
//         }
//     }
//     return sumArr.map(data => data.replace(/1|0/g, num => +num ? '#' : ' '))
// }

// 5차 수정
function solution(n, arr1, arr2) {
    let sumArr = arr1.map((data, idx) => (data | arr2[idx]).toString(2).split(''))
    let answer = sumArr.map(data => (data.length !== n) ? '0'.repeat(n - data.length)+data.join('') : data.join(''))
    return answer.map(data => data.replace(/1|0/g, num => +num ? '#' : ' '))
}

//console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
//console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))
console.log(solution(5, [1, 1, 4, 0, 1], [1, 1, 1, 0, 1]))