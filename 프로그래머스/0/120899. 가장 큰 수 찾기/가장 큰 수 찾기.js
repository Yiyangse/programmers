const solution = array => [Math.max(...array), array.indexOf(Math.max(...array))]

// 주석 설명
// 1. `const solution = array =>`: solution이라는 이름의 상수(const) 함수를 선언합니다. 이 함수는 단일 매개변수 array를 받습니다.
// 2. `[Math.max(...array), array.indexOf(Math.max(...array))]`: 이 함수는 두 부분으로 구성된 배열을 반환합니다. 첫 번째 부분은 array에서 가장 큰 값을 찾고(Math.max(...array)), 두 번째 부분은 그 값의 인덱스를 찾습니다(array.indexOf(Math.max(...array))).
// 3. `Math.max(...array)`: 전개 연산자(...)를 사용하여 array의 모든 요소를 개별적인 인수로 펼쳐서 Math.max 함수에 전달합니다. Math.max 함수는 가장 큰 값을 반환합니다.
// 4. `array.indexOf(Math.max(...array))`: array에서 가장 큰 값의 첫 번째 인덱스를 반환합니다.
