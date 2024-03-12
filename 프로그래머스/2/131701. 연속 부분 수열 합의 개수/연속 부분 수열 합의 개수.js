function solution(elements) {
    const answerArr = []
    const elementsArr = (elements.join('')+elements.join('')).split('')
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            let tmpArr = elements.slice(j, i + j)
            if (i + j > elements.length) {
                tmpArr = [...tmpArr, ...elements.slice(0, j+i-elements.length)]
            }
            answerArr.push(tmpArr.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0))
        }
    }
    
    return [...new Set(answerArr)].length
}