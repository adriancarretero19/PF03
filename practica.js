function fibonacci (n){
    if(n <= 0)
        throw new RangeError("solo números enteros ≥ 0");
    if(n === 0)
        return 0;
    if (n === 1)
        return 1;
    
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
    //return fibonacci(n - 1) + fibonacci(n - 2);
}