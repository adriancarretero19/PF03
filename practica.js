function esPinValido (pin){
    if (pin == null || pin == undefined || typeof(pin) != "string" || (pin.length != 4 && pin.length != 6) || !/^\d+$/.test(pin) || /^(\d)\1+$/.test(pin))
        return false;
    return true;
}