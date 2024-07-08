function solution(array, n){
    // 함수 정의: solution(array, n)은 주어진 배열(array)에서 n과 일치하는 요소의 개수를 반환하는 함수입니다.    
    let answer = 0; // 변수 answer를 0으로 초기화합니다. 이 변수는 n과 일치하는 요소의 개수를 세기 위해 사용됩니다.    
    for (i =0; i < array.length; i++){
        // 반복문: 배열(array)의 각 요소를 순회하면서 n과 일치하는 요소를 찾기 위해 반복합니다.
        if(array[i] === n){
            // 조건문: 현재 요소가 n과 일치하는지 확인합니다.            
            answer++; // 일치하는 경우, answer 변수를 증가시킵니다.
        }
    }    
    return answer; // 반복문이 종료된 후, n과 일치하는 요소의 총 개수(answer)를 반환합니다.
}
