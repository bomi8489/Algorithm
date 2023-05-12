function solution(s) {
    let answer = 0;
    let splitArray = s.split('');
    let letterXnum = 0;
    let nonXnum = 0;
    
    let keyword = splitArray[0];
    for(let i = 0; i < splitArray.length; i++){
        if(splitArray[i] === keyword) letterXnum++;
        else nonXnum++;
        
        if(letterXnum === nonXnum) {
            answer++;
            letterXnum = 0;
            nonXnum = 0;
            keyword = splitArray[i+1];
        }
        else if(i === splitArray.length-1) answer++;
    }
    
    return answer;
}