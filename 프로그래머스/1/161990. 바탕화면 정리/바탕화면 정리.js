function solution(wallpaper) {
    let position = [0, 0, 0, 0];
    let initArr = [];
    
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            position[0] = i;
            break;
        }
    }
    
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            initArr.push(wallpaper[i].indexOf('#'));
        }
        position[1] = Math.min(...initArr);
    }
    initArr = [];
    
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            initArr.push(i+1);
        }
        position[2] = Math.max(...initArr);
    }
    initArr = [];
    
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            initArr.push(wallpaper[i].lastIndexOf('#')+1);
        }
        position[3] = Math.max(...initArr);
    }
    
    return position;
}