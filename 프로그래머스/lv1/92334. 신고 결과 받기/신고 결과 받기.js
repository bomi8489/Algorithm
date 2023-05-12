function solution(id_list, report, k) {
    let setReportArray = [...new Set(report)];
    let reportedUser = Array(id_list.length).fill(0);
    let receivedMail = Array(id_list.length).fill(0);
    
    setReportArray = setReportArray.map(reportedData => reportedData.split(' '));
    setReportArray.map(reportedDataArray => {
        reportedUser[id_list.indexOf(reportedDataArray[1])] += 1;
    });
    
    reportedUser.map((reportedNum, idx) => {
        if(reportedNum >= k) {
            setReportArray.map(reportedDataArray => {
                if(reportedDataArray[1] === id_list[idx]) receivedMail[id_list.indexOf(reportedDataArray[0])]++
            })
        }
    });
    
    return receivedMail;
}