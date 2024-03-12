/*
1. 열의 개수가 4개이다 -> 생각보다 하드코딩하기 할만하다?
2. 
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