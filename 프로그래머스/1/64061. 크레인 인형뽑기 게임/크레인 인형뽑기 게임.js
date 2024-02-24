function solution(board, moves) {
    let answer = 0
    const tmpArr = []
    moves.map(move => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move-1] !== 0) {
                if (board[i][move-1] === tmpArr.at(-1)) {
                    tmpArr.pop()
                    board[i][move-1] = 0
                    answer += 2
                    break
                }
                else {
                    tmpArr.push(board[i][move-1])
                    board[i][move-1] = 0
                    break
                }
            }
        }
    })
    return answer
}