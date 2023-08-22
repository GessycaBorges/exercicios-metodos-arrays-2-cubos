//Sistema para biblioteca
const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const encontrarLivro = (titulo, biblioteca) => {
    const resposta = biblioteca.findIndex((livro) => {
        return livro === titulo;
    });
    console.log (`O livro está na posição ${resposta}`);
}

encontrarLivro (nomeDoLivro, livros);