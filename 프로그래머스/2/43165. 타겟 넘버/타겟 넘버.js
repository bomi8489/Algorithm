function solution(numbers, target) {
    let answer = 0
    function DFS(sum, depth) {
        if(depth === numbers.length) {
            if(sum === target) {
                answer += 1
            }
            return
        }

        DFS(sum + numbers[depth], depth + 1)
        DFS(sum - numbers[depth], depth + 1)
    }
    DFS(0, 0)
    return answer
}