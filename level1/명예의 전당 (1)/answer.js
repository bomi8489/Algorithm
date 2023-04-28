function solution(k, score) {
    let scoreArr = [];
    let answer = score.map(data => {
        scoreArr.push(data)
        return Math.min(...scoreArr.sort((a, b) => b - a).filter((_, idx) => idx < k))
    })
    return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))