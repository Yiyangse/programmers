function solution(cipher, code) {
    let system = "";  // 해독된 암호 문자열을 저장할 변수system 선언
    for (let i = code - 1;  // code - 1 위치부터 시작하여
         i < cipher.length;  // cipher 문자열의 끝까지 code 간격으로 반복
         i += code) {
        system += cipher[i];  // system 변수에 cipher의 i번째 글자를 추가
    }
    return system;  // 해독된 암호 문자열 반환
}
