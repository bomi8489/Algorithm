function solution(ingredient) {
    let answer = 0
    let tmp = []
    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient[i] === 1 && ingredient[i+1] === 2
            && ingredient[i+2] === 3 && ingredient[i+3] === 1) {
            ingredient.splice(i, 4)
            answer++
            i = tmp.at(-1) - 3
            tmp.pop()
            //console.log(ingredient, i)
        } else {
            tmp.push(i)
        }
    }
    return answer
}