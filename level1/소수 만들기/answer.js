function solution(nums) {
    let answer = 0
    const len = nums.length

    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            for(let k = j+1; k < len; k++){
                const sum = nums[i] + nums[j] + nums[k]
                if(isPrime(sum)) answer++
            }
        }
    }
    return answer
}

function isPrime(sum) {
    for(let i = 2; i < sum; i++){
        if(sum % i === 0) return false;
    }
    return sum > 1
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))