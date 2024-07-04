function solution(my_string) {
    // 1. 문자열을 배열로 변환
    let characters = my_string.split('');
    
    // 2. 배열을 뒤집음 (원본 배열을 수정함에 주의)
    let Rcharacters = characters.reverse();
    
    // 3. 뒤집힌 배열을 다시 문자열로 변환
    let Rstring = Rcharacters.join('');
    
    // 뒤집힌 문자열 반환
    return Rstring;
}

// 테스트를 위한 문자열
let my_string = "jaron";

// 함수 호출하여 뒤집힌 문자열 받음
let reversed = solution(my_string);

// 결과 출력
console.log(reversed);
