function solution(s) {
    let answer = 0
    let length = s.length
    
    for (let i = 0; i < length; i++) {
        answer += check(s)
        let sArr = s.split('')
        let tmp = sArr.shift()
        sArr.push(tmp)
        s = sArr.join('')
    }
    
    return answer
}

const check = (str) => {
    const tmpArr = []
    str.split('').map(item => {
        if (tmpArr.at(-1) === '(' && item === ')') tmpArr.pop()
        else if (tmpArr.at(-1) === '[' && item === ']') tmpArr.pop()
        else if (tmpArr.at(-1) === '{' && item === '}') tmpArr.pop()
        else tmpArr.push(item)
    })
    
    return tmpArr.length === 0 ? 1 : 0
}