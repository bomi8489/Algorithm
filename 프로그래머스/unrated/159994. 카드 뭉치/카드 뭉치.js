function solution(cards1, cards2, goal) {
    let answer = '';
    cards1.reverse();
    cards2.reverse();
    goal.map((word, idx) => {
        if(word === cards1[cards1.length-1]) {
            answer += cards1.pop();
            if(idx !== goal.length-1) answer += ' ';
        }
        else if(word === cards2[cards2.length-1]) {
            answer += cards2.pop();
            if(idx !== goal.length-1) answer += ' ';
        }
    })
    return goal.join(' ') === answer ? "Yes" : "No";
}