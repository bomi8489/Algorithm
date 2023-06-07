function solution(today,terms,privacies) {
    const newPrivacyTerms = [];
    const answer = [];

    privacies.forEach((e, i) => {
        const year = +e.split(' ')[0].split('.')[0];
        const month = +e.split(' ')[0].split('.')[1];
        const day = +e.split(' ')[0].split('.')[2];

        const todayYear = +today.split('.')[0];
        const todayMonth = +today.split('.')[1];
        const todayDay = +today.split('.')[2];

        const thisTerm = terms.filter((elm, i) => elm.split(' ')[0] === e.split(' ')[1])[0].split(' ')[1];

        let gap = 0;
        if(todayYear > year) gap += 12 * (todayYear - year);
        if(todayMonth > month && todayDay >= day) gap += todayMonth - month;
        else if(todayMonth > month && todayDay < day) gap += todayMonth - month - 1;
        else if(todayMonth <= month && todayDay >= day) gap += todayMonth - month;
        else if(todayMonth <= month && todayDay < day) gap += todayMonth - month - 1;
        if(gap >= thisTerm) answer.push(i+1);
    })
    
    return answer;
}