function solution(strings, n) {
    let str = ''
    let answer = strings.sort((str1, str2) => {
        let a = str1[n]
        let b = str2[n]
        if (a > b) return 1
        else if(a < b) return -1
        else str = a
    });
    let restArr = answer.filter(data => data[n] == str).sort()
    console.log(restArr, answer)
    //return answer;
}

function solution2(strings, n) {
    return strings.sort()
}

// console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
// console.log(solution(["zbcrw", "cdbwb", "sccer"], 2))
console.log(solution(["abce", "abcd", "abcdx"], 2))
// console.log(solution2(["abce", "abcd", "abcdx"], 2))