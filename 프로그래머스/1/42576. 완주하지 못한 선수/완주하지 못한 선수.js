function solution(participant, completion) {
    const participantObj = {}
    
    participant.forEach((e, i) => {
        if (participantObj.hasOwnProperty(e)) {
            participantObj[e] += 1
        }
        else {
            participantObj[e] = 1
        }
    })
    
    for (let i = 0; i < completion.length; i++) {
        participantObj[completion[i]] -= 1
        if (participantObj[completion[i]] === 0) {
            delete participantObj[completion[i]]
        }
    }
    
    return Object.keys(participantObj)[0]
}