function solution(n) {
    let answer = 0
    let array = Array(n-1).fill(2).map((data, idx) => data + idx)
                .filter((data, idx) => {
                    for(let i = 2; data>i; i++){
                        if(n % i === 0) return false
                    }
                })
    console.log(array)
    return answer
}

console.log(solution(10))
//console.log(solution(5))