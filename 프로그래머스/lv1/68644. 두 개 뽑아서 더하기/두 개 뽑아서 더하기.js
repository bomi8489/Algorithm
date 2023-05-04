function solution(numbers) {
    let answer = [];
    // numbers 배열 전체 요소 순회
    answer = numbers.map((num, idx1) => 
        // 순회하는 배열의 인덱스와 같은 인덱스를 제외한 배열
        numbers.filter((_, idx2) => idx1 !== idx2)
                // 같은 인덱스를 제외한 배열의 요소들 각각 더함
                .map(num2 => num + num2)
    // numbers 각 요소마다 새로운 배열과의 합을 구했기 때문에 2차원 배열로 나오기 때문에 1차원 배열로 변환
    ).flat()
    
    // 위의 연산의 결과에서 중복값을 제거하고, 정렬
    return [...new Set(answer)].sort((a, b) => a - b);
}