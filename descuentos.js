function calcularDescuento(precio, descuento){
    var precioFinal= (precio * (100 - descuento) / 100)
    return precioFinal;
}

function buttonDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const valueInputPrice = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const valueinputDiscount = inputDiscount.value;

    const precioFinal = calcularDescuento(valueInputPrice, valueinputDiscount);

    const resultado = document.getElementById("Resultado");
    resultado.innerText = "El precio con descuento son $" + precioFinal;
}