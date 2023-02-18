function solution(s) {
    let string = s.split('')
    let distance = [...string].map((data, idx) => [...string].splice(0, idx).lastIndexOf(data))
    return distance.map((data, idx) => (data !== -1) ? idx - data : -1)
}

console.log(solution("banana"))
console.log(solution("foobar"))