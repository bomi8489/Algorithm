function solution(numbers) {
    if(numbers.reduce((cal, cur) => cal + cur) === 0) return "0"
    else return numbers.sort((a, b) => 
        (String(b) + String(a)) - (String(a) + String(b))
    ).join('')
}