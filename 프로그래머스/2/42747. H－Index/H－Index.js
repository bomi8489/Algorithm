function solution(citations) {
    let answer = []
    
    for (let i = 0; i < citations.length; i++) {
        let citationNum = citations.filter(e => citations[i] <= e).length
        if (citations.length - citationNum <= citations[i]) 
            answer.push(Math.min(citations[i], citationNum))
    }
    
    return Math.max(...answer)
}