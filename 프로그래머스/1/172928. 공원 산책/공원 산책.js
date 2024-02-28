function solution(park, routes) {
    let currentPosition
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] == "S") currentPosition = [i, j]
        }
    }

    const directionObj = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    }
    
    for (const route of routes) {
        const [dir, distanceStr] = route.split(' ')
        let distance = parseInt(distanceStr)
        let [x, y] = currentPosition
        let move = 0
        
        while (move < distance) {
            x += directionObj[dir][0]
            y += directionObj[dir][1]
            if (x < 0 || park.length <= x || 
                y < 0 || park[0].length <= y || park[x][y] === 'X') break
            move++
        }
        if (move === distance) currentPosition = [x, y]
    }

    return currentPosition
}