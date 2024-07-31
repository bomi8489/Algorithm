function solution(fees, records) {
    const answer = []
    const [baseTime, baseFee, unitTime, unitFee] = fees
    const arr = records.map(record => record.split(' '))
    const feeObj = {}
    
    arr.forEach(e => {
        // 입차 기록
        if (e[2] === 'IN') {
            const entryTime = e[0].split(':').map(Number)
            if (feeObj[e[1]]) {
                feeObj[e[1]].push(entryTime[0]*60 + entryTime[1])
            } else {
                feeObj[e[1]] = [entryTime[0]*60 + entryTime[1]]
            }
        }
        // 출차 기록
        else if (e[2] === 'OUT') {
            const exitTime = e[0].split(':').map(Number)
            feeObj[e[1]].push(exitTime[0]*60 + exitTime[1])
        }
    })
    
    const keys = Object.keys(feeObj)
    
    // 출차기록 없는 경우 '23:59' 기록
    keys.map(key => {
        if (feeObj[key].length % 2 === 1) feeObj[key].push(23*60 + 59)
    })
    
    keys.map(key => {
        let fee = 0
        let totalTime = 0
        
        // 누적 주차 시간 계산
        while (feeObj[key].length > 0) {
            const exit = feeObj[key].pop()
            const entry = feeObj[key].pop()
            totalTime += (exit - entry)
        }
        
        fee += baseFee
        // 누적 주차시간이 기본 주차시간보다 긴 경우
        if (totalTime > baseTime) {
            fee += Math.ceil((totalTime - baseTime) / unitTime) * unitFee
        }
        
        answer.push([key, fee])
    })
    
    answer.sort((a, b) => Number(a[0]) - Number(b[0]))
    return answer.map(e => e[1])
}