function solution(clothes) {
    let answer = 1
    let clothesObj = {}
    
    clothes.forEach((e, i) => {
        if (clothesObj[e[1]]) clothesObj[e[1]].push(e[0])
        else clothesObj[e[1]] = [e[0]]
    })
    
    let clothesObjToArr = Object.values(clothesObj)
    let eachClothlengthArr = []
    
    for (let i = 0; i < clothesObjToArr.length; i++) {
        eachClothlengthArr.push(clothesObjToArr[i].length)
    }
    
    for (let i = 0; i < eachClothlengthArr.length; i++) {
        answer *= (1 + eachClothlengthArr[i])
    }
    
    return answer - 1
}