/*
규칙
1. 정점에서 나가는 간선이 없고 들어오는 간선만 있는 노드의 수는 막대그래프의 수와 같다
2. 정점에서 나가는 간선이 2개 들어오는 간선이 최소 2개인 노드의 수는 8자 모양 그래프의 수와 같다
3. 추가 생성된 정점은 모든 그래프의 정점 하나로 연결되며 그래프들의 합은 2 이상이므로
   정점에서 나가는 간선이 최소 2개 들어오는 간선이 없는 노드는 추가 생성된 정점이다.
4. 추가 생성된 정점에서 나가는 간선의 개수는 모든 그래프의 수와 같으므로
   (추가 생성된 정점에서 나가는 간선의 개수) - (막대그래프 수) - (8자 그래프 수)는 도넛 그래프 개수다.
*/

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