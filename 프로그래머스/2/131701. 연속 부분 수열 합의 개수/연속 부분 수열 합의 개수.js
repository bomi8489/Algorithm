function solution(elements) {
    const answerArr = []
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            let tmpArr = elements.slice(j, i + j)
            if (i + j > elements.length) {
                tmpArr = [...tmpArr, ...elements.slice(0, i + j - elements.length)]
            }
            answerArr.push(tmpArr.reduce((acc, cur) => acc + cur, 0))
        }
    }
    
    return [...new Set(answerArr)].length
}