//Filtro de nome por letra
const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtro = nomes.filter((nome) => {
    return nome.indexOf("a") === 0 || nome.indexOf("A") === 0;
});

console.log (filtro);