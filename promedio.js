function calcularPromedio(lista) {
    //let sumaLista =0;

    //for (let i = 0; i < lista.length; i++) {
    //sumaLista += lista[i];
    //}

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

function comparar(a,b) {
    return a - b;
}

function calcularMediana(lista) {

    lista = lista.sort(comparar);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = (elemento1 + elemento2) / 2;
    }else{
        mediana = lista[mitadLista]
    }

    return mediana;
}


function calculaModa(lista) {
    const listaCount ={};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )

    const listaArray = Object.entries(listaCount).sort(
        function comparar(a,b) {
            return a[1] - b[1];
        }
    );
    const moda = listaArray[listaArray.length -1];
    
    return moda;
}