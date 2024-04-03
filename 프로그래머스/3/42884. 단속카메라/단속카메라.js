function solution(routes) {
    let answer = 0
    let prev = -30001
    routes.sort((a, b) => a[1] - b[1])
    
    for (let i = 0; i < routes.length; i++) {
        const [a, b] = routes[i]
        if (prev < a) {
            prev = b
            answer++
        }
    }
    
    return answer
}