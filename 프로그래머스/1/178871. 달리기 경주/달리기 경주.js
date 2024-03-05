function solution(players, callings) {
    const playerObj = {}

    players.forEach((player, index)=> {
        playerObj[player] = (playerObj[player] | 0) + index
    })
        
    for (let i = 0; i < callings.length; i++) {
        let playerIndex = playerObj[callings[i]]
        let tmp = players[playerIndex - 1]
        
        players[playerIndex - 1] = players[playerIndex]
        players[playerIndex] = tmp
        
        playerObj[players[playerIndex - 1]] = playerIndex - 1
        playerObj[players[playerIndex]] = playerIndex
    }
    return players
}