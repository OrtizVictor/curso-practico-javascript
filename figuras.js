//Codigo del cuadrado
function perimetroCuadrado (lado){
    return  lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

//Codigo del triangulo
function perimetroTriangulo (lado1, lado2, base){
    return  lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

//Codigo del circulo
const pi = Math.PI;
function diametroCirculo(radio){
    return radio * 2; 
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return  diametro * pi;
}

function areaCirclo (radio){
    return pi * (radio * radio);
}

function alturaTriangulo (base, lado){
    return Math.sqrt((lado * lado) - ((base * base) / 4));
}


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetreo = perimetroCuadrado(value);
    alert (perimetreo);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}


function calcularPerimetroTriangulo(){
    const InputBase = document.getElementById("InputBase");
    const valueBase = parseInt(InputBase.value);
    const InputLado1 = document.getElementById("InputLado1");
    const valueLado1 = parseInt(InputLado1.value)
    const InputLado2 = document.getElementById("InputLado2");
    const valueLado2 = parseInt(InputLado2.value)

    const perimetreo = perimetroTriangulo(valueBase, valueLado1, valueLado2);
    alert (perimetreo);
}

function calcularAreaTriangulo(){
    const InputBase = document.getElementById("InputBase");
    const valueBase = InputBase.value;
    const InputAltura = document.getElementById("InputAltura");
    const valueAltura = InputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert (area);
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetreo = perimetroCirculo(value);
    alert (perimetreo);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirclo(value);
    alert (area);
}


function calcularAlturaTriangulo(){
    const InputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const valueBase = InputBaseTriangulo.value;
    const InputLadoTriangulo = document.getElementById("InputLadoTriangulo");
    const valueLado = InputLadoTriangulo.value;
    const altura = alturaTriangulo(valueBase, valueLado);
    alert (altura);
}