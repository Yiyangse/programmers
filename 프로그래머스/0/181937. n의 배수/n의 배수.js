// num과 n을 매개변수로 받아 num이 n의 배수인지 검사하는 함수
function solution(num, n) {
    // 결과를 저장할 변수 answer를 0으로 초기화
    var answer = 0;
    
    // num이 n으로 나누어 떨어지면 (즉, num이 n의 배수이면)
    if (num % n === 0) {
        // answer를 1로 설정 (num이 n의 배수일 경우)
        answer = 1;
    } else {
        // 그렇지 않으면 answer를 0으로 설정 (num이 n의 배수가 아닐 경우)
        answer = 0;
    }
    
    // 최종 결과를 반환
    return answer;
}
