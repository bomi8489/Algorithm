function solution(n) {
    const answer = new Array(n).fill(true)
    answer[0] = false
    for(let i = 2; i**2 <= n; i++){
        if(answer[i-1] === true) {
            for(let j = i**2; j<=n; j+=i) {
                answer[j-1] = false
            }
        }
    }
    console.log(answer)
    return answer.filter(e => e).length
}

console.log(solution(10))
console.log(solution(5))