function solution(s, skip, index) {
    let alphabetString = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let skippedString = skip.split('').map(item => 
        alphabetString = alphabetString.replaceAll(item, '')
    ).at(-1)
    let answer = s.split('').map(item => {
        return skippedString[skippedString.split('').indexOf(item) + index]
    }).join('')
    return answer
}