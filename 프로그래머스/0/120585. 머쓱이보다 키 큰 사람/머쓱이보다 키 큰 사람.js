const solution = (array, height) => {
  // 배열 `array`에서 `height`보다 큰 요소들을 필터링하여 새 배열을 생성한 후,
  // 그 배열의 길이(크기)를 반환합니다.
  return array.filter(a => a > height).length;
}