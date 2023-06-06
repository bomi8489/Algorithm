function solution(n) {
    let answer = [];
    let start = 1;
    let via = 2;
    let goal = 3;
    
    let move = (start, goal) => {
        answer.push([start, goal]);
    }
    
    let hanoi = (n, start, goal, via) => {
        if(n === 1) move(start, goal);
        else {
            hanoi(n-1, start, via, goal);
            move(start, goal);
            hanoi(n-1, via, goal, start);
        }
    }
    
    hanoi(n, start, goal, via);
    
    return answer;
}