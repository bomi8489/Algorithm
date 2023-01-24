// function solution(sizes) {
//     let size = sizes.map(data => data.sort((a, b) => a - b))
//     let width = Math.max(...size.map(data => data[0]))
//     let height = Math.max(...size.map(data => data[1]))
//     return width*height
// }

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => 
        [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0]
    )
    return hor * ver;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))