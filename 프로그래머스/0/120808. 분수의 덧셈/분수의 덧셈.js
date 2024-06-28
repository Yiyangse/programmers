// solution.js 파일

// 주어진 두 분수의 덧셈 결과를 약분하여 반환하는 함수
function solution(numer1, denom1, numer2, denom2) {
    // 분자 계산
    let topNum = (numer1 * denom2) + (numer2 * denom1);
    // 분모 계산
    let botNum = denom1 * denom2;
    // 최대공약수 초기화
    let gcd = 1;
    
    // 최대공약수 구하기
    for(let i = 1; i <= topNum; i++) {
        if(topNum % i === 0 && botNum % i === 0) {
            gcd = i;
        }
    }
    
    // 분수를 최대공약수로 약분하여 배열에 저장하여 반환
    let answer = [(topNum / gcd), (botNum / gcd)];
    
    return answer;
}

module.exports = solution; // 모듈로 내보내기
