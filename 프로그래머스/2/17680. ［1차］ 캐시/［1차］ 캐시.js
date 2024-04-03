function solution(cacheSize, cities) {
    let answer = 0
    const cache = []
    
    cities = cities.map(e => e.toLowerCase())
    
    if (cacheSize === 0) {
        return cities.length * 5
    }
    
    for (let i = 0; i < cities.length; i++) {
        if (cache.includes(cities[i])) {
            let leastUesedCahe = cache.splice(cache.indexOf(cities[i]), 1)[0]
            cache.push(leastUesedCahe)
            answer++
        }
        else {
            if (cache.length === cacheSize) {
                cache.shift()
            }
            cache.push(cities[i])
            answer += 5
        }
    }
    
    return answer
}