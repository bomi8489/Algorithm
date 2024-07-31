function solution(fees, records) {
    const answer = []
    const [baseTime, baseFee, unitTime, unitFee] = fees
    const arr = records.map(record => record.split(' '))
    const feeObj = {}
    
    arr.forEach(e => {
        if (e[2] === 'IN') {
            const entryTime = e[0].split(':').map(Number)
            if (feeObj[e[1]]) {
                feeObj[e[1]].push(entryTime[0]*60 + entryTime[1])
            } else {
                feeObj[e[1]] = [entryTime[0]*60 + entryTime[1]]
            }
        }
        else if (e[2] === 'OUT') {
            const exitTime = e[0].split(':').map(Number)
            feeObj[e[1]].push(exitTime[0]*60 + exitTime[1])
        }
    })
    
    const keys = Object.keys(feeObj)
    
    keys.map(key => {
        if (feeObj[key].length % 2 === 1) feeObj[key].push(23*60 + 59)
    })
    
    keys.map(key => {
        let fee = 0
        let totalTime = 0
        while (feeObj[key].length > 0) {
            const exit = feeObj[key].pop()
            const entry = feeObj[key].pop()
            totalTime += (exit - entry)
        }
        
        fee += baseFee
        if (totalTime > baseTime) {
            fee += Math.ceil((totalTime - baseTime) / unitTime) * unitFee
        }
        
        answer.push([key, fee])
    })
    
    answer.sort((a, b) => Number(a[0]) - Number(b[0]))
    return answer.map(e => e[1])
}