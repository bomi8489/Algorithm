function solution(want, number, discount) {
    let count = 0
    
    for (let i = 0; i < discount.length; i++) {
        let discountArr = discount.slice(i, i + 10)
        let numberCopy = JSON.parse(JSON.stringify(number))
        
        for (let j = 0; j < discountArr.length; j++) {
            if (want.includes(discountArr[j])) {
                numberCopy[want.indexOf(discountArr[j])]--
            }
        }
        
        if (numberCopy.filter(e => e > 0).length === 0) count++ 
    }
    
    return count
}