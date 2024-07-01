// function solution(num1, num2) {
//    if(num1===num2){
//        return 1;
//    }else{
//         return -1;
//     }}

function solution(num1, num2) {
    var answer =0;
    // 같으면 1
    if (num1==num2){
        answer=1;
    }else {
    // 다르면 -1
        answer=-1;
    }
    return answer;
}