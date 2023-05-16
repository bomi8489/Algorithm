function solution(id_list, report, k) {
    // report 배열에서 중복 제거
    let setReportArray = [...new Set(report)];
    // 각 유저당 신고당한 횟수 이 배열은 id_list 유저 순서와 동일 ex) [0, 0, 0, 0]
    let reportedUser = Array(id_list.length).fill(0);
    // 각 유저당 받은 메일 횟수 이 배열은 id_list 유저 순서와 동일 ex) [0, 0, 0, 0]
    let receivedMail = Array(id_list.length).fill(0);
    
    // ' ' 기준으로 문자열 자르기 ex) [[muzi frodo]] => [[muzi, frodo]]
    setReportArray = setReportArray.map(reportedData => reportedData.split(' '));
    // 각 유저당 받은 신고 횟수
    setReportArray.map(reportedDataArray => {
        // 신고당한 유저의 이름으로 id_list의 인덱스를 찾아 reportedUser의 해당 인덱스값 증가
        reportedUser[id_list.indexOf(reportedDataArray[1])]++;
    });
    
    // 각 유저당 받은 메일 횟수
    reportedUser.map((reportedNum, idx) => {
        // 신고가 k번 이상이어야 메일을 받는다
        if(reportedNum >= k) {
            setReportArray.map(reportedDataArray => {
                // 한 유저가 신고한 유저가 신고당한 횟수가 k번을 넘어 정지가 됐다면
                if(reportedDataArray[1] === id_list[idx])
                    // 신고한 유저이름과 매칭되는 receivedMail의 해당 인덱스값 증가
                    receivedMail[id_list.indexOf(reportedDataArray[0])]++;
            })
        }
    });
    
    return receivedMail;
}