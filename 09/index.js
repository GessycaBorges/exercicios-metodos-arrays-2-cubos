//Filtro de números positivos
const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const filtroNumerosPositivos = (arrayNumeros) => {
    const resultado = arrayNumeros.filter((numero) => {
        return numero > 0;
    });
    console.log (resultado);
};

filtroNumerosPositivos (numeros);