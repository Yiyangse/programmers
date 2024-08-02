function solution(n) {
    var answer = 0;
    var a = Math.sqrt(n);

    if(Number.isInteger(a)){
        answer = 1;
    }else{
        answer = 2;
    }
    return answer;
}