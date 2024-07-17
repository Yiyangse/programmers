function solution(my_string) {
  // 결과를 저장할 빈 문자열을 초기화
  let answer = "";  
  // 모음들을 담은 배열을 정의
  const vowel = ["a", "e", "i", "o", "u"];  
  // 입력 문자열의 각 문자에 대해 반복
  for (let i = 0; i < my_string.length; i++) {
    // 현재 문자가 모음이 아닌지 확인
    if (!vowel.includes(my_string[i])) {
      // 현재 문자가 모음이 아니면 결과 문자열에 추가
      answer += my_string[i];
    }
  }
  // 모음이 제거된 최종 결과 문자열반환
  return answer;
}
