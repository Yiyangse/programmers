function solution(num_list, n) {
    // 새로운 결과 리스트를 초기화
    let result = [];
    // num_list를 n 간격으로 순회
    for (let i = 0; i < num_list.length; i += n) {
        // n 간격으로 선택된 원소를 결과 리스트에 추가
        result.push(num_list[i]);
    }
    // n 간격으로 저장된 원소들을 담은 결과 리스트 반환
    return result;
}
