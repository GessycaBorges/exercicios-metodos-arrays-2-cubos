//Verificando limite de caracters
const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
const palavras2 = ["céu", "sol", "mar", "casa"];

const verificaPalavra = (arrayPalavras) => {
    const resposta = arrayPalavras.some((palavra) => {
        return (palavra.length > 5)
    });
    let mensagem;
    if (resposta) {
        mensagem = "existe palavra inválida";
    } else {
        mensagem = arrayPalavras;
    }
        
    console.log (mensagem);
}

verificaPalavra (palavras); //true
verificaPalavra (palavras2) //false