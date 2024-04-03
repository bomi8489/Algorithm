function solution(word) {
    let wordArr = ['', 'A', 'E', 'I', 'O', 'U']
    let tmp = ['', '', '', '', '']
    let data = []
    
    for (let i = 0; i < 6; i++) {
        tmp[0] = wordArr[i]
        data.push(tmp.join(''))
        for (let j = 0; j < 6; j++) {
            tmp[1] = wordArr[j]
            data.push(tmp.join(''))
            for (let k = 0; k < 6; k++) {
                tmp[2] = wordArr[k]
                data.push(tmp.join(''))
                for (let l = 0; l < 6; l++) {
                    tmp[3] = wordArr[l]
                    data.push(tmp.join(''))
                    for (let m = 0; m < 6; m++) {
                        tmp[4] = wordArr[m]
                        data.push(tmp.join(''))
                    }
                }
            }
        }
    }
    
    data = [...new Set(data)].sort()

    return data.indexOf(word)
}