function solution(keymap, targets) {
    const answer = Array(targets.length).fill(0)
    const keymapLength = keymap.length
    for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < targets[i].length; j++) {
            let arr = []
            for(let k = 0; k < keymapLength; k++) {
                let clickBtnNum = keymap[k].split('').indexOf(targets[i][j]) + 1
                if (clickBtnNum > 0)
                    arr.push(clickBtnNum)
            }
            if (arr.length > 0) {
                answer[i] += Math.min(...arr)
            } else {
                answer[i] = -1
                break
            }
        }
    }
    return answer
}