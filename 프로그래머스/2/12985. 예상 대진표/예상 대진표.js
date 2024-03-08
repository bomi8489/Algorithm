function solution(n,a,b) {
    let currentRound = 1
    
    /* a가 b보다 큰 경우 스왑 */
    if (a > b) {
        let tmp = a
        a = b
        b = tmp
    }
    
    /* b가 짝수이고 a, b의 차가 1일 때 까지 반복 */
    while (b % 2 !== 0 || b - a !== 1) {
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        currentRound++
    }
    return currentRound
}