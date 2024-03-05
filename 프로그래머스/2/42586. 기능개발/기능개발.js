function solution(progresses, speeds) {
    const answer = []
    progresses.reverse()
    speeds.reverse()
    let count = 0
    
    while (progresses.length) {
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i]
            }
        }
        
        for (let j = progresses.length-1; j >= 0; j--) {
            if (progresses[j] >= 100) {
                progresses.pop()
                speeds.pop()
                count++
            } else {
                break
            }
        }
        
        if (count > 0) answer.push(count)
        count = 0
    }
    
    return answer
}