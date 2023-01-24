// function solution(s, n) {
//     let arr = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ                              '
//     return s.split('').map(data => arr[arr.indexOf(data)+n]).join('');
// }

function solution(s, n) {
    let arr = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return s.split(/(?:)/u).map(data => {
        return (data != ' ') ? arr[arr.indexOf(data)+n] : ' '
    }).join('')
}

// function solution(s, n) {
//     var arr = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
//     return s.split('').map(data => arr[arr.indexOf(data)+n]).join('');
// }

console.log(solution("AB", 1))
console.log(solution("z", 1))
console.log(solution("a B z", 4))