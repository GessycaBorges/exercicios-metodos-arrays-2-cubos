//Filtro e validação de usuários
const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
];

const validacaoUsuarios = (arrayObjetos) => {
    const faixaEtaria = arrayObjetos.filter((objeto) => {
        return objeto.idade > 17 && objeto.idade < 66;
    });
    const verificaHabilitacao = faixaEtaria.every((objeto) => {
        return objeto.habilitado;
    });
    if (verificaHabilitacao) {
        console.log ("todos passaram no teste");
    } else {
        console.log ("todos precisam estar habilitados");
    }
}

validacaoUsuarios(usuarios);