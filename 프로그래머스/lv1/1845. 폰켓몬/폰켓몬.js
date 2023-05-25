function solution(nums) {
    let setNums = [...new Set(nums)];
    return (nums.length/2 < setNums.length) ? Math.floor(nums.length/2) : setNums.length
}