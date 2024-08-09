function solution(numbers, direction) {
    // direction이 "right"일 경우
    if(direction === "right"){
        // 배열의 마지막 원소를 제거하여 변수에 저장
        let lastElement = numbers.pop(); // .pop(): 배열의 마지막 요소를 제거하고 그 값을 반환
        // 배열의 시작 부분에 저장한 원소를 추가
        numbers.unshift(lastElement); // .unshift(): 배열의 시작 부분에 하나 이상의 요소를 추가
    } else {
        // direction이 "left"일 경우
        // 배열의 첫 번째 원소를 제거하여 변수에 저장
        let firstElement = numbers.shift(); // .shift(): 배열의 첫 번째 요소를 제거하고 그 값을 반환
        // 배열의 끝 부분에 저장한 원소를 추가
        numbers.push(firstElement); // .push(): 배열의 끝 부분에 하나 이상의 요소를 추가
    }
    // 회전이 완료된 배열을 반환
    return numbers;
}
