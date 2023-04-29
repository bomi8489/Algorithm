// function solution(n) {
//     let fibonacci = [0, 1]
//     for(let i = 2; i <= n; i++){
//         fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])
//     }
//     return fibonacci[n]
// }

function solution(n) {
    let fibonacci = [0, 1]
    for(let i = 2; i <= n; i++){
        fibonacci.push((fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])%1234567)
    }
    return fibonacci[n]
}

console.log(solution(3))
console.log(solution(5))
console.log(solution(55))