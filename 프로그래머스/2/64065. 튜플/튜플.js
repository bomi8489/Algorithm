function solution(s) {
    const result = [];
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    arr.sort((a, b) => a.length - b.length);
    
    for (let i = 0; i < arr.length; i++) {
        const currentArr = arr[i];
        for (let j = 0; j < currentArr.length; j++) {
            const currentValue = currentArr[j];
            if (!result.includes(currentValue)) result.push(currentValue)
        }
    }
    
    return result;
}