function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a,b) => a-b);
    
    let num1 = numbers.pop();
    let num2 = numbers.pop();
    
    answer = num1 * num2;
    
    return answer;
}