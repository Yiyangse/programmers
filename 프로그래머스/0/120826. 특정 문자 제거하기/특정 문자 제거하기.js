function solution(my_string, letter) {
    // 결과를 저장할 빈 배열을 초기화합니다.
    let ans = [];
    // 입력 문자열 'my_string'의 각 문자를 순회합니다.
    for(let i = 0; i < my_string.length; i++) {
        let str = my_string[i]; // 현재 문자를 가져옵니다.
        
        // 현재 문자가 'letter'와 같은지 확인합니다.
        if(str === letter) {
            continue; // 만약 같다면 다음 순회로 넘어갑니다 ('ans'에 추가하지 않습니다).
        } else {
            ans.push(str); // 같지 않다면 'ans' 배열에 문자를 추가합니다.
        }
    }
    
    // 'ans' 배열의 요소들을 문자열로 합쳐서 반환합니다.
    return ans.join("");
}
