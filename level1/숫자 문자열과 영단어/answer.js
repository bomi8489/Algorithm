function solution(s) {
    return +s.replaceAll('zero', 0)
            .replaceAll('one', 1)
            .replaceAll('two', 2)
            .replaceAll('three', 3)
            .replaceAll('four', 4)
            .replaceAll('five', 5)
            .replaceAll('six', 6)
            .replaceAll('seven', 7)
            .replaceAll('eight', 8)
            .replaceAll('nine', 9)
}

console.log(solution("one4seveneight"))
console.log(solution("23four5six7"))
console.log(solution("2three45sixseven"))
console.log(solution("123"))
console.log(solution("twotwotwotwotwotwotwotwotwo"))