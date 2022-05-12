//Helpers
function esPar(numero) {
    return (numero % 2 == 0);
}
function comparar(a,b) {
    return a - b;
}


const salariosCol = colombia.map(
    function (persona) {
        return persona.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return a - b;
    }
)

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

const medianaGeneralCol = calcularMediana(salariosColSorted);



//Mediana del top 10%

const spliceStart = salariosColSorted.length * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMediana(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);