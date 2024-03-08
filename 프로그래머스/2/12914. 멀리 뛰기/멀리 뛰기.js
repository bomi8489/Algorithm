/* 
n이 1일 때: 1
2일 때: 2
3일 때: 3
4일 때: 5
5일 때: 8
6일 때: 13

피보나치 수의 규칙을 따름
*/

function solution(n) {
    let fibonacci = [0, 1]
    for(let i = 1; i <= n; i++){
        fibonacci.push((fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])%1234567)
    }
    return fibonacci.at(-1)
}