function solution(answers) {
    let student1 = "12345".repeat(Math.ceil(answers.length/5)).split('').filter((data, idx) => data == answers[idx]).length
    let student2 = "21232425".repeat(Math.ceil(answers.length/8)).split('').filter((data, idx) => data == answers[idx]).length
    let student3 = "3311224455".repeat(Math.ceil(answers.length/10)).split('').filter((data, idx) => data == answers[idx]).length
    
    let answer = []
    let array = [student1, student2, student3]
    let search = Math.max(...array)
    let index = array.indexOf(search)
    while(index != -1){
        answer.push(index+1)
        index = array.indexOf(search, index + 1)
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1]))
console.log(solution([1, 3, 2, 4, 2]))