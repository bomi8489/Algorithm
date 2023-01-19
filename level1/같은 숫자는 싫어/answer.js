function solution(arr){
    var answer = arr.filter((data, idx) => data !== arr[idx+1]);
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))
console.log(solution([4,4,4,3,3]))