function solution(nums) {
    let setNums = [...new Set(nums)];
    return (nums.length/2 < setNums.length) ? answer = Math.floor(nums.length/2) : answer = setNums.length
}