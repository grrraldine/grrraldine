//Tipo de figura y perímetro

function tipoFigura(numLados, lado) {
    if (numLados <= 0) {
        console.log("Error: El número de lados no es válido :<");
        return;
    }

    let tipo;
    let perimetro;

if (numLados === 0) {
    tipo = "Círculo";
    perimetro = 2 * Math.PI * lado; // Circunferencia
}
if (numLados === 3) {
    tipo = "Triángulo";
    perimetro = 3 * lado;
}
if (numLados === 4) {
    tipo = "Cuadrado";
    perimetro = 4 * lado;
}
if (numLados === 5) {
    tipo = "Pentágono";
    perimetro = 5 * lado;
}
if (numLados === 6) {
    tipo = "Hexágono";
    perimetro = 6 * lado;
}
if (numLados > 6) {
    tipo = "Polígono";
    perimetro = numLados * lado;
}

    //mostrar tipo de fig y permimetro
    console.log("Tipo de figura: " + tipo);
    console.log("Perímetro: " + perimetro);
}

