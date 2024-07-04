function solution(num_list) {
    // 초기화된 답변 배열 생성, [짝수 개수, 홀수 개수]
    var answer = [0, 0];
    // 주어진 배열 num_list를 순회하면서 각 숫자의 홀짝 여부를 판별하여 answer 배열 갱신
    for (let a of num_list) {
        // a를 2로 나눈 나머지가 0이면 짝수, 1이면 홀수
        answer[a % 2] += 1;
    }

    // 최종적으로 업데이트된 짝수 개수와 홀수 개수를 담은 배열 반환
    return answer;
}

// 테스트를 위한 입력 배열
let num_list = [1, 2, 3, 4, 5, 6];

// 함수 호출하여 결과 받음
let result = solution(num_list);

// 결과 출력
console.log(result);  // [3, 3]
