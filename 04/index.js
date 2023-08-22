//Validação de numeros pares
const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarPares = (arrayNumeros) => {
    const resposta = arrayNumeros.every((numero) => {
        return numero % 2 === 0;
    });
    if (resposta) {
        console.log ("array válido");
    } else {
        console.log ("array inválido");
    }
}

validarPares (numeros);