/*
1. 주어진 stones와 k가 너무 터무니 없이 큰 값이다.
2. 즉, 배열의 순회는 꿈도 못꿈
3. 이진탐색으로 접근해야 함
4. 징검다리를 건널 수 있는 인원을 임의의 값으로 지정 (보통 최소값과 최대값을 정해두고 중간값으로 지정)
5. stones 배열을 순회하며 임의의 값을 뺀다
5-1. 이 때, 차이가 0 이하인 즉, stones[i]값이 임의의 값보다 작거나 같은 경우가 k번 연속 일어난다면
     임의의 값은 징검다리를 건널 수 있는 최대의 인원 이거나 그보다 큰 수이다.
     따라서, 최대값을 (임의의 값 - 1)로 변경하고 5번 과정을 재반복한다.
5-2. 이 때, 차이가 0 이하인 경우가 k번 연속 일어나지 않았다면
     임의의 값은 모두 징겅다리를 건널 수 있는 인원이다.
     따라서, 최소값을 (임의의 값 + 1)로 변경하고 5번 과정을 재반복한다.
6. 5번 과정을 계속 반복하여 최소값을 리턴한다.
*/

function solution(stones, k) {
    let left = 1
    let right = 200000000
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0
        
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] <= mid) count++
            else count = 0
            
            if (count === k) break
        }
        
        if (count === k) right = mid - 1
        else left = mid + 1
    }
    
    return left
}