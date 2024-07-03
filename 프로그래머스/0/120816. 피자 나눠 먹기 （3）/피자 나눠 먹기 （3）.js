function solution(slice, n) {
    // 함수 정의: solution(slice, n)
    var answer = 0; 
    // 변수 선언: answer를 0으로 초기화

    answer = Math.floor( (n - 1) / slice) + 1;
    // n-1을 slice로 나눈 몫을 계산하고, Math.floor()를 사용해 정수 부분만 남깁니다.
    // 그리고 1을 더해 최종적인 결과값을 answer에 할당합니다.
    
    return answer; 
    // answer 값을 반환합니다.
}
