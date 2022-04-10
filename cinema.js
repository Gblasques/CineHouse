// criando variavel constante com nome do cinema
const cinema = ('Cinema Blasques');

console.log(cinema);

const catalogo = require('./catalogo');

// Criando funções para interagir no projeto    

// Função para adicionar um filme
function adicionarFilme (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    let novoFilme = {
        codigo: catalogo.length + 1, 
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    };

    return catalogo.push(novoFilme) 
};

// Função para Buscar Filmes 01
function buscarFilme(filme){
    let buscarFilme = catalogo.indexOf(filme);
    return catalogo(buscarFilme);
}
// Função para Buscar Filmes 02

function buscarFilme(codigo){
    return busca = catalogo.find(function(valor, index){
        return catalogo[index].codigo == codigo
    }
    )
}

// Função para alterar o Status Em Cartaz
function alterarStatusEmCartaz(codigo, novoStatus){
    let filmeProcurado = catalogo[codigo -1];

    if (!filmeProcurado){
        return console.log("Codigo não encontrado");
    }
    catalogo[codigo - 1].emCartaz = novoStatus
    console.log("Filme Alterado!")
}