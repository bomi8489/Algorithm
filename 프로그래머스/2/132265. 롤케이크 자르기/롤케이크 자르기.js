function solution(topping) {
    let answer = 0
    const toppingObj1 = {}
    const toppingObj2 = {}
    let toppingCount1 = 0
    let toppingCount2 = 0
    
    topping.forEach(e => {
        if (toppingObj2[e] === undefined) {
            toppingObj2[e] = 1
            toppingCount2++
        } else {
            toppingObj2[e]++
        }
    })
    
    for (let i = 0; i < topping.length; i++) {
        if (toppingObj2[topping[i]] === 1) {
            toppingCount2--
            delete toppingObj2[topping[i]]
        } else {
            toppingObj2[topping[i]]--
        }
        
        if (toppingObj1[topping[i]] === undefined) {
            toppingObj1[topping[i]] = 1
            toppingCount1++
        } else {
            toppingObj1[topping[i]]++
        }
        
        if (toppingCount1 === toppingCount2) answer++
    }
    
    return answer
}