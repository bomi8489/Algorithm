/* 
못 풀어서 힌트보고 품..
1. 의상이 한 종류이고 a개일 때 조합의 수: a
2. 의상이 두 중류이고 각각 a, b개일 때 조합의 수: (a + b) + (ab)
3. 의상이 세 종류이고 각각 a, b, c개일 때 조합의 수: (a + b + c) + (ab + bc + ac) + (abc)
4. 조합의 수의 규칙은 n차 다항식의 계수들의 합
5. 예) 다음 3차 다항식이 있다
   (x+a)(x+b)(x+c) = x^3 + (a + b + c)x^2 + (ab + bc + ac)x + (abc)
6. 위의 식의 x에 1을 대입하면 계수들의 합 + 1이 된다.
7. 결론: 수학을 공부하자
*/

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