//Filtro de caracteres
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const verificarCidade = (arrayCidades) => {
    const resposta = arrayCidades.filter((cidade) => {
        return cidade.length < 9;
    });
    console.log (resposta.join(", "));
};

verificarCidade (cidades);