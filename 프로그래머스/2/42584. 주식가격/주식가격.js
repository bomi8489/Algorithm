function solution(prices) {
    const answer = []
    let count = 0
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length - 1; j++) {
            if (prices[j] >= prices[i]) {
                count++
            } else {
                break
            }
        }
        answer.push(count)
        count = 0
    }
    return answer
}