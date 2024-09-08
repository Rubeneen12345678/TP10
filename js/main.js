// El mayor de cuatro numeros
function mayorDeCuatro(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);  
}

console.log("El mayor de 4 números es:", mayorDeCuatro(21, 15, 12, 10))

// El Menor de tres numeros
function MenorDeTres(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

console.log("El menor de 3 numeros es:",MenorDeTres(14, 17, 8))

// Es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

console.log("Mi numero es:",esParOImpar(30))
console.log("Mi numero es:",esParOImpar(15))