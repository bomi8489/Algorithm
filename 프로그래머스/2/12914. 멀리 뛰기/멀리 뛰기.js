function solution(n) {
    let answer = 0
    let fibonacci = [0, 1]
    for(let i = 1; i <= n; i++){
        fibonacci.push((fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])%1234567)
    }
    return fibonacci.at(-1)
}