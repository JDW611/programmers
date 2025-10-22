function solution(n) {
    const primeSet = new Set();
    
    for(let i = 2; i<=n; i++) {
        primeSet.add(i);
    }
    
    for(let j = 2; j< Math.sqrt(n); j++) {
        if(primeSet.has(j)) {
            for(let k = j*2; k<=n; k += j) {
                primeSet.delete(k);
            }
        }
    }
    
    return primeSet.size;
}