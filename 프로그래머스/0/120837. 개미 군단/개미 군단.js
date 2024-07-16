function solution(hp) {
    //주어진 숫자의 소숫점 자리를 잘라버리고, 그 숫자 이하의 가장 큰 정수를 반환
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}