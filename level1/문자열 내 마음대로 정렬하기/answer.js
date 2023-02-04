function solution(strings, n) {
    let str = ''
    let answer = strings.sort((str1, str2) => {
        let a = str1[n]
        let b = str2[n]
        if (a > b) return 1
        else if(a < b) return -1
        else if(a == b) {
            if(str1 > str2) return 1
            else if(str1 < str2) return -1
        }
    });
    return answer;
}

function solution2(strings, n){
    return strings.sort((s1, s2) => 
        s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
    );
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))
console.log(solution(["zbcrw", "cdbwb", "sccer"], 2))
console.log(solution(["abce", "abcd", "abcdx"], 2))