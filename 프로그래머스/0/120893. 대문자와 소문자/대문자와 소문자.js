function solution(my_string) {  // my_string을 인자로 받는 함수 solution 정의
    let arr = [];  // 변환된 문자들을 저장할 빈 배열 arr 선언
    for (let i = 0; i < my_string.length; i++) {  // my_string의 각 문자를 순회하는 for 루프
        if (my_string[i] === my_string[i].toUpperCase()) {  // 현재 문자가 대문자인지 확인
            arr.push(my_string[i].toLowerCase())  // 대문자라면 소문자로 변환하여 arr에 추가
        } else {  // 현재 문자가 소문자인 경우
            arr.push(my_string[i].toUpperCase())  // 소문자라면 대문자로 변환하여 arr에 추가
        }
    } 
    return arr.join('')  // 배열 arr의 모든 요소를 하나의 문자열로 합쳐 반환
}
