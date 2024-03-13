function solution(n) {
    const answer = []
    while(n > 0) {
        if (n % 3 !== 0) {
            let rest = n % 3
            n = Math.floor(n / 3)
            answer.push(rest)
        } else {
            answer.push(String(Number(solution(n - 1)) + 2))
            break
        }
    }
    return answer.reverse().join('')
}