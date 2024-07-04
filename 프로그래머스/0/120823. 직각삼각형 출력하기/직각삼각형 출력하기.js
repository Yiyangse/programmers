//Node.js의 내장 모듈인 readline을 사용하여 사용자의 입력을 받기 위한 준비를 합니다. readline 모듈은 입력 스트림과 출력 스트림을 생성하고, 이를 rl 변수할당
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 입력값을 저장할 배열
let input = []; 
rl.on('line', function (line) {
    input = line.split(' '); // 입력받은 문자열을 공백을 기준으로 나누어 배열로 저장
}).on('close', function () {
    const num = Number(input[0]); // 배열의 첫 번째 값을 숫자로 변환하여 num에 저장
    let logStr = ''; // 별을 출력할 문자열 변수 초기화

    // 삼각형을 형성하는 외부 루프
    for (let i = 0; i < num; i++) {
        // 각 줄마다 별을 출력하는 내부 루프
        for (let j = 0; j <= i; j++) {
            logStr += '*';} // '*' 문자를 logStr에 추가
        logStr += '\n';} // 각 줄 끝에 줄 바꿈 문자('\n') 추가
    console.log(logStr); // 모든 줄을 출력하여 삼각형 모양의 별을 완성
});