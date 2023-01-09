function solution(n) {
    let newArr = String(n).split('').sort().reverse();
    return +newArr.reduce((a, b) => a + b);
}

console.log(solution(118372));