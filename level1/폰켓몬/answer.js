function solution(nums) {
    let numsLength = nums.length
    let setNums = [...new Set(nums)];
    return (numsLength/2 < setNums.length) ? answer = Math.floor(numsLength/2) : answer = setNums.length
}

console.log(solution([3, 1, 2, 3]))
console.log(solution([3, 3, 3, 2, 2, 4]))
console.log(solution([3, 3, 3, 2, 2, 2]))