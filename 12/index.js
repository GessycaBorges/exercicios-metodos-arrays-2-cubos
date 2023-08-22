//Filtro de usuários
const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];

const filtroDeUsuarios = (objetoProfissao, objetoIdade, array) => {
    const resultado = array.filter((objeto) => {
        if (objeto.profissao === objetoProfissao && objeto.idade > objetoIdade){
        return objeto;
        }
    });
    console.log (resultado);
};

const filtroDeUsuarios2 = (arrayProfissao, objetoIdade, array) => {
    const resultado = array.filter((objeto) => {
        if (arrayProfissao.includes(objeto.profissao) && objeto.idade < objetoIdade){
        return objeto;
        }
    });
    console.log (resultado);
};

//programadores e programadoras que sejam maiores de 20 anos;
filtroDeUsuarios ("Programador", 20, pessoas);

//jornalistas que tenha mais de 30 anos;
filtroDeUsuarios ("Jornalista", 30, pessoas);

//jornalistas e programadores e programadoras que sejam jovens (tem até 29 anos);
filtroDeUsuarios2 (["Programador", "Jornalista"], 29, pessoas);