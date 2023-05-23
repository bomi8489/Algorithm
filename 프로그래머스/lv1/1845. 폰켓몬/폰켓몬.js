function solution(nums) {
    let numsLength = nums.length
    let setNums = [...new Set(nums)];
    return (numsLength/2 < setNums.length) ? answer = Math.floor(numsLength/2) : answer = setNums.length
}