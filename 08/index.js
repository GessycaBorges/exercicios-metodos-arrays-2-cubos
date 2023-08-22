//Modificando um array
const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const modificandoArray = (array) => {
    const resultado = array.map((item) => {
        palavra = (item.slice(0, 1)).toUpperCase() + (item.slice(1).toLowerCase());
        return `${array.indexOf(item)} - ${palavra}`;
    });
    console.log (resultado);
};

modificandoArray (frutas);