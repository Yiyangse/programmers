function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환하여 처리
    let strArray = my_string.split('');
    // num1과 num2에 해당하는 문자 교환
    let temp = strArray[num1];
    strArray[num1] = strArray[num2];
    strArray[num2] = temp;    
    // 배열을 다시 문자열로 변환하여 반환
    let result = strArray.join('');
    return result;
}
// 예시 테스트 케이스
console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"