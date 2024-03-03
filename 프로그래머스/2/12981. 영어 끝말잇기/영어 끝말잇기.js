function solution(n, words) {
    let wordArray = [words[0]]
    let answer = [0, 0]
    
    for(let i = 1; i < words.length; i++) {
        if(wordArray.indexOf(words[i]) !== -1) {
            answer = [i%n+1, Math.floor(i/n+1)]
            break
        }
        else if(wordArray[wordArray.length-1][wordArray[wordArray.length-1].length-1] !== words[i][0]) {
            answer = [i%n+1, Math.floor(i/n+1)]
            break
        }
        else wordArray.push(words[i])
    }

    return answer
}