/* 
1. 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다. << 이게 진짜 개떡같은 설명 어느정도 해석이 필요함
2. 발표한 논문 n편 중, a번 이상 인용된 논문이 b편 이상일 때, a와 b중 작은 값이 h-index 후보
3. h-index 후보들 중 (n - b)편의 논문의 수가 a번 이하로 인용된 h-index중 최대값이 구하려는 값
*/

function solution(citations) {
    let answer = []
    
    for (let i = 0; i < citations.length; i++) {
        let citationNum = citations.filter(e => citations[i] <= e).length
        if (citations.length - citationNum <= citations[i]) 
            answer.push(Math.min(citations[i], citationNum))
    }
    
    return Math.max(...answer)
}