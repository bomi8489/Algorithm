/* 
targets 길이와 좌표 범위가 상당히 큰 수 인걸 보고 이분탐색인가 싶었는데 아니었음
1. targets를 순회하며 x 좌표(폭격미사일의 시작지점)를 요격했는지(prev값을 두어 x좌표와 비교) 확인
2. 만약 폭격미사일을 요격하지 못했다면 (prev값이 targets[i]의 x좌표값 이하라면)
   현재 미사일은 요격해야하는 대상이므로 미사일의 끝지점(targets[i]의 y좌표값)을 prev에 넣고
   answer증가
3. 단, targets[i]의 y좌표값을 기준으로 다음 요격할 미사일의 범위가 지정되므로
   targets[i][1]을 기준으로 targets배열을 오름차순으로 정렬부터 해야한다.
*/

function solution(targets) {
    let answer = 0
    let prev = -1
    targets.sort((a, b) => a[1] - b[1])
    
    for (let i = 0; i < targets.length; i++) {
        const [x, y] = targets[i]
        if (prev <= x) {
            prev = y
            answer++
        }
    }
    
    return answer
}