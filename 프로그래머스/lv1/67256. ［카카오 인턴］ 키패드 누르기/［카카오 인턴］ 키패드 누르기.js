function solution(numbers, hand) {
    answer = '';
    leftHandPosition = [0, 0];
    rightHandPosition = [0, 2];
    numbers.map((num, idx) => {
        if(num === 0) return numbers[idx] = 10
        else return numbers[idx]--
    });
    let keyCoordinate = [
                            [3, 0], [3, 1], [3, 2],
                            [2, 0], [2, 1], [2, 2],
                            [1, 0], [1, 1], [1, 2],
                            [0, 0], [0, 1], [0, 2]
                        ];
    
    numbers.map((_, idx) => numbers[idx] = keyCoordinate[numbers[idx]]);
    
    for(let i = 0; i < numbers.length; i++) {
        // numbers[i]가 1, 4, 7 일때, 왼손위치 numbers[i]로 변경, answer에 L 글자 추가
        if(JSON.stringify(numbers[i]) === JSON.stringify([3, 0]) 
           || JSON.stringify(numbers[i]) === JSON.stringify([2, 0]) 
           || JSON.stringify(numbers[i]) === JSON.stringify([1, 0])
          ) {
            leftHandPosition = numbers[i];
            answer += 'L';
        }
        // numbers[i]가 3, 6, 9 일때, 오른손위치 numbers[i]로 변경, answer에 R 글자 추가
        else if(JSON.stringify(numbers[i]) === JSON.stringify([3, 2])
                || JSON.stringify(numbers[i]) === JSON.stringify([2, 2])
                || JSON.stringify(numbers[i]) === JSON.stringify([1, 2])
               ) {
            rightHandPosition = numbers[i];
            answer += 'R';
        }
        // numbers[i]가 0, 2, 5, 8 일때
        else {
            // 왼손위치와 numbers[i]의 거리가 오른손위치와 numbers[i]의 거리보다 짧을 때
            if(Math.ceil(Math.sqrt(Math.pow(leftHandPosition[0] - numbers[i][0], 2) + Math.pow(leftHandPosition[1] - numbers[i][1], 2)))
                < Math.ceil(Math.sqrt(Math.pow(rightHandPosition[0] - numbers[i][0], 2) + Math.pow(rightHandPosition[1] - numbers[i][1], 2)))
              ) {
                leftHandPosition = numbers[i];
                answer += 'L';
            }
            // 오른손위치와 numbers[i]의 거리가 왼손위치와 numbers[i]의 거리보다 짧을 때
            else if(Math.ceil(Math.sqrt(Math.pow(leftHandPosition[0] - numbers[i][0], 2) + Math.pow(leftHandPosition[1] - numbers[i][1], 2)))
                    > Math.ceil(Math.sqrt(Math.pow(rightHandPosition[0] - numbers[i][0], 2) + Math.pow(rightHandPosition[1] - numbers[i][1], 2)))
                    ) {
                rightHandPosition = numbers[i];
                answer += 'R';
            }
            // 왼손위치와 numbers[i]의 거리와 오른손위치와 numbers[i]의 거리가 같을 때
            else {
                if(hand === 'left') {
                    leftHandPosition = numbers[i];
                    answer += 'L'
                }
                else {
                    rightHandPosition = numbers[i];
                    answer += 'R';
                }
            }
        }
    }
    return answer;
}