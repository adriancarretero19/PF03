<<<<<<< HEAD
function fibonacci (n){
    if(n <= 0)
        throw new RangeError("solo números enteros ≥ 0");
    if(n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);

=======
function esPinValido (pin){
    if (pin == null || pin == undefined || typeof(pin) != "string" || (pin.length != 4 && pin.length != 6) || !/^\d+$/.test(pin) || /^(\d)\1+$/.test(pin))
        return false;
    return true;
>>>>>>> 86326062fbe268d717fa7a8562d9ab28a24455ec
}