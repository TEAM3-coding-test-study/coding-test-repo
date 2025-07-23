function solution(progresses, speeds) {
    var answer = [];

    const q = [];

    while (progresses.length >= 1) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        let dayDeploy = 0;
        while (progresses.length >= 1) {
            if (progresses[0] >= 100) {
                // console.log("한 기능 배포 직전 deploy : ", dayDeploy);
                // console.log(progresses);
                progresses.shift();
                speeds.shift();

                
                dayDeploy++;
                continue;
            }
            break;
        }
        if(dayDeploy !== 0){
            // console.log("하루 최종 : ", dayDeploy);
            // console.log(progresses);
            answer.push(dayDeploy);        
        }
    }



    return answer;
}