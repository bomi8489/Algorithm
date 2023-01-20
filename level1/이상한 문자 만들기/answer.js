function solution(s) {
    let answer = s.split(' ').map((str) => {
        let word = str.split('')
        return word.map((data, idx) => {
            if(idx % 2 == 0) {
                return data.toUpperCase()
            }
            else return data.toLowerCase()
        }).join('')
    })
    return answer.join(' ');
}

console.log(solution("try hello world"));