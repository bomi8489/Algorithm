function solution(n) {
    let restDistance = n
    let minBatteryUse = 0
    while (restDistance > 0) {
        if (restDistance % 2 === 0) {
            restDistance = restDistance / 2
        } else {
            restDistance -= 1
            minBatteryUse++
        }
        
        if (restDistance === 1) {
            minBatteryUse++
            break
        }
    }
    return minBatteryUse
}