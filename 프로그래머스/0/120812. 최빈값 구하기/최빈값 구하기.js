function solution(array) {
    const map = new Map();
    const result = [];
    let maxN = 0;
    
    for(const num of array) {
        if(map.has(num)) {
            let up = map.get(num) + 1;
            map.set(num, up);  
        } else {
            map.set(num,1);
        }
    }
    
    map.forEach((value, key) => {
        if(value >= maxN) {
            result[0] = key;
            
            if(value === maxN) {
                result[0] = -1;
            }
            
            maxN = value;
        }
    })
    
    
    return result[0];
}