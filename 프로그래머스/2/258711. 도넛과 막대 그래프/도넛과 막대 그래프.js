function solution(edges) {
    const answer = [0, 0, 0, 0]
    const edgeObj = {}
    
    edges.forEach((e) => {
        edgeObj[e[0]] = [0, 0]
        edgeObj[e[1]] = [0, 0]
    })
    
    edges.forEach((e) => {
        edgeObj[e[0]][0] += 1
        edgeObj[e[1]][1] += 1
    })
    
    const edgeObjKeys = Object.keys(edgeObj)
    
    edgeObjKeys.forEach((e) => {
        if (edgeObj[e][0] >= 2 && edgeObj[e][1] === 0) answer[0] += Number(e)
        if (edgeObj[e][0] === 0) answer[2] += 1
        if (edgeObj[e][0] === 2 && edgeObj[e][1] >= 2) answer[3] += 1
    })
    
    answer[1] = edgeObj[answer[0]][0] - answer[2] - answer[3]
    return answer
}