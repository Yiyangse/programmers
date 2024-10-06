function solution(balls, share) {
	// 팩토리얼 재귀로 풀기
    function factorial(num){
        if (num === 0 || num === 1){
            return 1
        }else{
            return num * factorial(num-1)
        }
    }
    if (balls < share){
        return 0
    }else{
        // 계산 결과가 실수일 수 있으므로 소수점 이하를 반올림하여 정수로 반환하는 함수
        return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
    }
}