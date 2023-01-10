function solution(s) {
    return s.split(' ').map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ')
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));