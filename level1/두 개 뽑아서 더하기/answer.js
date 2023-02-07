function solution(numbers) {
    return [...new Set(numbers.map((v1, idx1) => 
        numbers.filter((v2, idx2) => idx1 != idx2).map(v3 => v1 + v3).join(' ')
    ).join(' ').split(' ').sort((a,b)=>a-b).map(data => +data))]
}


console.log(solution([2, 1, 3, 4, 1]))
console.log(solution([5, 0, 2, 7]))