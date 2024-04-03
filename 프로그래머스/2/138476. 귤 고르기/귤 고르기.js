function solution(k, tangerine) {
    let answer = 0
    let count = 0
    const tanCntObj = {}
    
    tangerine.forEach((e, i) => {
        if (tanCntObj[e] > 0) tanCntObj[e]++
        else tanCntObj[e] = 1
    })
    
    const tanCntArr = Object.values(tanCntObj).sort((a, b) => b - a)
    
    for (let i = 0; i < tanCntArr.length; i++) {
        if (k > count) {
            count += tanCntArr[i]
            answer++
        } else {
            return answer
        }
    }
    
    return answer
}