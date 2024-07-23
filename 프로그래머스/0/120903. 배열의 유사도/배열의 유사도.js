function solution(s1, s2) {
    // s1과 s2의 공통된 원소를 찾아 개수를 반환
    var answer = s1.filter(s => s2.includes(s)).length;
    return answer;
}

// 예제 테스트
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0
