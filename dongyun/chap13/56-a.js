function solution(strings, n) {
    strings.sort((a, b) => {
        if(a[n].charCodeAt() === b[n].charCodeAt()){
            return a.localeCompare(b)
        }
        return a[n].charCodeAt() - b[n].charCodeAt();
    })
    
    return strings;
}