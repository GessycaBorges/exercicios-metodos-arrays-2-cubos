//Filtro de números pares
const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtroNumerosPares = (arrayNumeros) => {
    const resultado = arrayNumeros.filter((numero) => {
       return numero % 2 === 0;
    });
    console.log (resultado);
};

filtroNumerosPares (numeros);