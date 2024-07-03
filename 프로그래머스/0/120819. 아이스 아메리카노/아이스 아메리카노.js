// function solution(money) {
//     var answer = [
//         if (money>5500){
        
//             return     {ParseInt(money/5500);}
//             else (money>15000)
//             return {parseInt(money/5500);}
//         }
//     ];
//     return answer;
// }


// function solution(money) {
//     var answer = [
//         cup = 5500;
//         change = (money - cup);
//         money = math.floor(money/cup) + change ;

//         return = 배열....?
//     ]
// }

function solution(money) {
    const americano = 5500;
    
    const glass = Math.floor(money / americano);
    const change = money % americano;
    
    const ans = [glass, change];
    
    return ans;
}