function solution(food) {
    let array = [];
    let order = food.filter( (v,idx) => idx != 0 ).map( data => Math.floor(data/2) )
    for(let i = 0; i<order.length; i++){
        for(let j = 0; j<order[i]; j++){
            array.push(`${i+1}`)
        }
    }
    let answer = array.join('') + '0' + array.reverse().join('')
    return answer;
}

console.log(solution([1, 3, 4, 6]))
console.log(solution([1, 7, 1, 2]))