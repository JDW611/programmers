function solution(a, b) {
    let answer = 0;
    
    const sum1 = Number(String(a) + String(b));
    const sum2 = Number(String(b) + String(a));
    
    if(sum1 > sum2) {
        answer = sum1;
    } else {
        answer = sum2;
    }
    
    return answer;
}