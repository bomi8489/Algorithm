function solution(N, stages) {
    let stageArray = Array(N).fill(1).map((data, idx) => data + idx)
    let tmpArray = stageArray.map(stageNum => (
        stages.filter(userStage => stageNum >= userStage).length
    ))
    let failRateArray = tmpArray.map((data, idx) => {
        return (idx > 0) 
        ?
        [data - tmpArray[idx-1], (stages.length)-tmpArray[idx-1]]
        :
        [data, stages.length]
    })
    let rankingArray = failRateArray.map((data, idx) => {
        if(data[0] !== 0) return [data[0]/data[1], idx+1]
        else return [0, idx+1]
    }).sort((arr1, arr2) => arr2[0] - arr1[0]).map(data => data[1])

    return rankingArray
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));