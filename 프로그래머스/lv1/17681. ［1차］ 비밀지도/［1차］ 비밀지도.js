function solution(n, arr1, arr2) {
    let sumArr = arr1.map((data, idx) => (data | arr2[idx])
                          .toString(2).split(''));
    let lengthCheck = sumArr.map(data => (data.length !== n) ? '0'
                                 .repeat(n - data.length)+data.join('') : data.join(''))
    return lengthCheck.map(data => data.replace(/1|0/g, num => +num ? '#' : ' '))
}