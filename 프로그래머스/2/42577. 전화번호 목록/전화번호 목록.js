function solution(phone_book) {
    let copyPhoneArr = [...phone_book].sort()
    
    for (let i = 0; i < copyPhoneArr.length - 1; i++) {
        let nextPrefix = copyPhoneArr[i+1].substr(0, copyPhoneArr[i].length)
        if (copyPhoneArr[i] === nextPrefix) return false
    }
    
    return true
}