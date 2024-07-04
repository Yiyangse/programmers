function solution(my_string, n) {
    var answer = '';
    for (var i = 0;
         i < my_string.length;
         i++) {
        answer += my_string[i].repeat(n);
        // 각 문자를 n번 반복하여 answer에 추가합니다
    }
    return answer;
}
// 사용 예시:
var result = solution('hello', 3);
console.log(result); // 출력: 'hhheeellllllooo'
