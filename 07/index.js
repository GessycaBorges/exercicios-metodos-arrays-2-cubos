//Busca de CEP
const enderecos = [
    { cep: "00111222", rua: "Rua dos Artistas" },
    { cep: "00111333", rua: "Rua Augusta" },
    { cep: "00222444", rua: "Avenida Paralela" },
    { cep: "11222333", rua: "Rua Carlos Gomes" }
];

const buscaCep = (objetoCep, arrayEndereco) => {
    arrayEndereco.find((item) => {
        if (item.cep === objetoCep){
            console.log (item.rua);
        }
    });
};

buscaCep ("00222444", enderecos);