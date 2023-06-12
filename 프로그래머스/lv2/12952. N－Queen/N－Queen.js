function check(queen, row) {
    // 이전까지 두었던 퀸의 위치를 확인
    for (let i = 0; i < row; i++) {
        if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
            return false; // 둘 수 없다면 false
        }
    }
    
    return true; // 모두 통과되면 true
}

function search(queen, row) {
    const n = queen.length;
    let count = 0;
    
    if (n === row) {
        return 1;
    }
    
    for (let col = 0; col < n; col++) { // 0부터 n까지 열을 둘 수 있게 만듬
        queen[row] = col; // 우선 퀸을 둠
        if (check(queen, row)) { // 퀸을 둘 수 있다면
            count += search(queen, row + 1); // 다음 행으로 이동
        }
    }
    
    return count;
}

function solution(n) {
    // 미리 n개 만큼의 배열을 초기화, 0번 행부터 시작
    return search(Array(n).fill(0), 0);
}