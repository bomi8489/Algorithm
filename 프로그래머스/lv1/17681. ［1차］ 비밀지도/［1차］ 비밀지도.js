function solution(n, arr1, arr2) {
    let answer = [];
    let sumArr = [];
    
    // arr1과 arr2 or 연산하기
    for(let i = 0; i < n; i++) {
        sumArr.push((arr1[i] | arr2[i]).toString(2));
    }
    
    // 위의 연산결과의 배열 길이가 n보다 작을경우 즉, 최상위 비트가 0이라 생략된 경우
    for(let i = 0; i < sumArr.length; i++) {
        sumArr[i] = sumArr[i].padStart(n, '0');
    }
    
    // 배열의 요소가 1이면 '#', 0이면 ' '으로 변환
    for(let i = 0; i < sumArr.length; i++) {
        answer.push(sumArr[i].replace(/1|0/g, num => +num ? '#' : ' '));
    } 
    return answer;
}