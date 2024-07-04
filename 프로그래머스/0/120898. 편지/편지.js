function solution(message) {
    // 초기화된 변수 answer 선언 및 0으로 초기화
    var answer = 0;

    // 메시지의 길이를 구하고, 그 길이에 2를 곱하여 answer에 할당
    answer = message.length * 2;

    // 결과값인 answer 반환
    return answer;
}

// 테스트를 위한 입력 메시지
let message = "Hello";

// 함수 호출하여 결과 받음
let result = solution(message);

// 결과 출력
console.log(result);  // 10
