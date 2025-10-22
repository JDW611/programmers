function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a,b) => a-b);
    
    if(numbers.at(-1) * numbers.at(-2) >= numbers[0] * numbers[1]) {
        answer = numbers.at(-1) * numbers.at(-2);
    } else {
        answer = numbers[0] * numbers[1]
    }
    
    return answer;
}