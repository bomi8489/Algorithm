// function solution(name, yearning, photo) {
//     let answer = Array(photo.length).fill(0);
//     photo.map(photoArray => 
//         photoArray.map(person => {
//             if(name.findIndex((personName) => personName === person) !== -1) {
//                 return name.findIndex((personName) => personName === person)
//             }
//         }).filter(data => data !== undefined)
//     ).map((indexArray, idx) => 
//         indexArray.map(nameIndex => 
//             answer[idx] += yearning[nameIndex]
//         )
//     )
//     return answer;
// }

function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}

console.log(solution(
    ["may", "kein", "kain", "radi"], 
    [5, 10, 1, 3], 
    [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
))
console.log(solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
))
console.log(solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"],["kein", "deny", "may"], ["kon", "coni"]]
))