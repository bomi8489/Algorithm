function solution(n, m, section) {
    let answer = 0;
    let wallArray = Array(n).fill(1)
    section.map(num => wallArray[num-1] = 0)
    
    while(wallArray.findIndex((e) => e === 0) !== -1) {
        let zeroIndex = wallArray.findIndex((e) => e === 0);
        wallArray.fill(1, zeroIndex, zeroIndex+m)
        answer++;
    }
    return answer;
}