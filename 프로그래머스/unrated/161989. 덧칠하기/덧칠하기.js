function solution(n, m, section) {
    let answer = 0;
    let wallArray = Array(n).fill(1)
    section.map(num => wallArray[num-1] = 0)
    
    while(wallArray.findIndex((e) => e === 0) !== -1) {
        let zeroIndex = wallArray.findIndex((e) => e === 0);
        for(i=zeroIndex; i < zeroIndex+m && i < wallArray.length; i++){
            wallArray[i] = 1
        }
        answer++;
    }
    return answer;
}