function esPinValido (pin){
    if (pin == null)
        return false;

    if (pin == undefined)
        return false;

    if (pin.length != 4 && pin.length != 6)
        return false;
    
    if (typeof(pin) != "number")
        return false;

    for (let i = 1; i < pin.length; i++){
        if (pin[0] != pin[i])
            break;
        if (i >= pin.length)
            return false;
    }

    return true;
}

/*
▪ No puede ser null ni undefined.
▪ No puede estar vacío.
▪ Longitud 4 o 6 (típico de PINes).
▪ Solo dígitos 0–9.
▪ Debe prohibirse que todos los dígitos sean iguales (‘1111’, ‘888888’, ‘33333’…).
*/