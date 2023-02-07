function solution(a, b) {
    let days = ["SUN", "MON", "TUE", "WED", "TUR", "FRI", "SAT"]
    let dayOfMonth = {
        1 : 31,
        2 : 29,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    }
    let standard = [1, "FRI"]
    let answer = ''
    console.log(dayOfMonth[a])
    return answer;
}

console.log(solution(1, 1))
console.log(solution(5, 24))