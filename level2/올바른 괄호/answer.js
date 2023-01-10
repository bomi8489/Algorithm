function solution(s){
    let count = 0;
    
    if(s[0] === ")" || s[s.length-1] === "(") return false
    else s.split('').map(v => {
        if(v === "(") count += 1;
        else if(v === ")") count -= 1;
    }
    );
    console.log(count);
    return (count === 0) ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));