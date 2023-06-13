function solution(s) {
    return s.split(' ').map(v => v.toLowerCase()).map(v => 
        v.replace(/^[a-z]/, w => w.toUpperCase())
        ).join(" ");
}