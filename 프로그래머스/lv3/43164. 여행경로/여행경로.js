function solution(tickets) {
    const ticketsGraph = {};
    
    for(const [src, dest] of tickets) {
        if(ticketsGraph[src] === undefined) {
            ticketsGraph[src] = [];
        }
        ticketsGraph[src].push(dest);
    }
    
    for(const value of Object.values(ticketsGraph)) {
        value.sort().reverse();
    }
    
    let stack = ["ICN"];
    let answer = [];
    while(stack.length > 0) {
        let src = stack.at(-1);
        
        // 갈 수 있는 경로가 있다면
        if (ticketsGraph[src] && ticketsGraph[src].length > 0) {
            // 갈 수 있는 경로 중 알파벳 순으로 앞선 것을 먼저 방문
            // 역순으로 정렬했기에 pop을 하면 알파벳 순
            stack.push(ticketsGraph[src].pop());
        } else { // 더 이상 갈 수 있는 경로가 없다면
            // 경로를 추가
            answer.push(stack.pop());
        }
    }
    
    return answer.reverse();
}