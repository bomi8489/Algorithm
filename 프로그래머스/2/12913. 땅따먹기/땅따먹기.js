/*
1. i번째 행에 i-1번째에 선택했던 열을 제외하고 i-1번째 행의 최대 값을 i행에 각각 더하기 (dp)
2. 열의 개수가 4개이다 -> 생각보다 하드코딩하기 할만하다?
*/

function solution(land) {
    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3])
        land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3])
        land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3])
        land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2])
    }
    return Math.max(...land.at(-1))
}