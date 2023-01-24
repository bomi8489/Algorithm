// function solution(n, arr1, arr2) {
//     let array1 = arr1.map(data => {
//         return (data.length !== n) ? '0'+data.toString(2) : data.toString(2)
//     });
//     // let array2 = arr2.map(data => {
//     //     return (data.length !== 6) ? +'0'+data.toString(2) : data.toString(2)
//     // });
//     return [array1];
// }

// function solution(n, arr1, arr2) {
//     let array1 = arr1.map((data, idx) => (data | arr2[idx]).toString(2).split(''))
//     let array2 = array1.map(data => data.map(v => v.replace(/1/g, '#')))
//     return array2.map(data => data.map(v => v.replace(/0/g, ' ')).join(''))
// }

function solution(n, arr1, arr2) {
    let sum = arr1.map((data, idx) => (data | arr2[idx]).toString(2))
    let array2 = sum.map(data => {
        if(data.length !== n) return '0'+data
        else return data
    })
    let answer = array2.map(data => data.map(v => v.replace(/1/g, '#')))
//     return array2.map(data => data.map(v => v.replace(/0/g, ' ')).join(''))
    return answer
}
// length가 n과 같지 않을때 예외처리해야함 

//console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))