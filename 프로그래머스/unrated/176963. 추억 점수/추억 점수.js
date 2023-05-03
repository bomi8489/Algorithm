function solution(name, yearning, photo) {
    let answer = Array(photo.length).fill(0);
    photo.map(photoArray => 
        photoArray.map(person => {
            if(name.findIndex((personName) => personName === person) !== -1) {
                return name.findIndex((personName) => personName === person)
            }
        }).filter(data => data !== undefined)
    ).map((indexArray, idx) => 
        indexArray.map(nameIndex => 
            answer[idx] += yearning[nameIndex]
        )
    )
    return answer;
}