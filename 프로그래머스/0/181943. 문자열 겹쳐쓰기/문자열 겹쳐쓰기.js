function solution(my_string, overwrite_string, s) {
    let answer = '';
    
    const strArr = my_string.split('');
    strArr.splice(s,overwrite_string.length,overwrite_string);
    
    answer = strArr.join('');
    
    return answer;
}