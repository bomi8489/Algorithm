function solution(a, b) {
    let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let dayOfMonth =  [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let numOfday = 0
    for(let i=0; i<a-1; i++){
        numOfday += dayOfMonth[i]
    }
    numOfday += b
    return days[numOfday%7]
}

console.log(solution(1, 1))
console.log(solution(7, 31))
console.log(solution(8, 1))
console.log(solution(12, 31))