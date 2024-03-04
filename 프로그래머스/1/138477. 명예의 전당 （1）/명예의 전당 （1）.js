function solution(k, score) {
    let scoreArr = []
    let answer = score.map(data => {
        scoreArr.push(data)
        scoreArr.sort((a, b) => b - a);
        return Math.min(...scoreArr.filter((_, idx) => idx < k))
    })
    return answer
}