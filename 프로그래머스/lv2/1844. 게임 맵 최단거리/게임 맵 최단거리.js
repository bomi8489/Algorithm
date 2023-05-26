function solution(maps) {
    let xLength = maps[0].length;
    let yLength = maps.length;
    let xGoal = xLength-1;
    let yGoal = yLength-1;
    
    let queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        let [x, y, answer] = queue.shift();
        
        if(x < 0 || x >= xLength) continue;
        if(y < 0 || y >= yLength) continue;
        if(maps[y][x] === 0) continue;
        
        if(x === xGoal && y === yGoal) {
            return answer;
        }
        
        maps[y][x] = 0;
        queue.push([x, y + 1, answer + 1]);
        queue.push([x, y - 1, answer + 1]);
        queue.push([x + 1, y, answer + 1]);
        queue.push([x - 1, y, answer + 1]);
    }
    
    return -1;
}