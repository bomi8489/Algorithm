function solution(n, edge) {
    const graph = Array.from(Array(n+1), () => []);
    const distance = Array(n+1).fill(0);
    distance[1] = 1;
    
    for(const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    
    // BFS
    const queue = [1];
    while(queue.length > 0) {
        const src = queue.shift();
        for(const dest of graph[src]) {
            if(distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }
    
    const maxDistance = Math.max(...distance);
    return distance.filter(item => item === maxDistance).length
}