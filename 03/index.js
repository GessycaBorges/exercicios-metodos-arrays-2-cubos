//Validando lista de compras
const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const proibido = ["cerveja", "vodka"];

const conferirLista = (arrayPalavras, palavrasProibidas) => {
    const resposta = arrayPalavras.some((palavra) => {
        return palavrasProibidas.includes (palavra);
    });
    let mensagem;
    if (resposta) {
        mensagem = "revise sua lista, joão. possui bebida com venda proibida!";
    } else {
        mensagem = "tudo certo, vamos as compras!";
    }
        
    console.log (mensagem);
}

conferirLista (palavras, proibido);