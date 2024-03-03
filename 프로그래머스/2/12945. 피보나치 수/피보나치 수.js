function solution(n) {
    let fibonacci = [0, 1]
    for(let i = 2; i <= n; i++){
        fibonacci.push((fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])%1234567)
    }
    return fibonacci[n]
}