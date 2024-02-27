function solution(t, p) {
    let pLength = p.length
    let answer = t.split('').map((data, idx) => 
        [...t].splice(idx, pLength).join('')
    ).filter(data => data.length === pLength)
    .filter(v => Number(v) <= p).length
    return answer
}