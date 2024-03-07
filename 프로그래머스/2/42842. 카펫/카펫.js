function solution(brown, yellow) {
    let width = (brown-2)/2
    let height = 3
    for (let i = 0; i < brown; i++) {
        if ((width - 2) * (height - 2) === yellow) {
            break
        } else {
            width--
            height++
        }
    }
    return [width, height]
}