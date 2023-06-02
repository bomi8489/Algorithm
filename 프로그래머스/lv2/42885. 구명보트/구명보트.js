function solution(people, limit) {
    let answer = 0;
    let boat = [];
    people.sort((a, b) => a - b);
    
    while(people.length) {
        boat.push(people.pop());
        if(boat[0] + people[0] <= limit) {
            boat.push(people.shift());
            answer++;
            boat = [];
        }
        else {
            answer++;
            boat = [];
        }
    }
    
    return answer;
}