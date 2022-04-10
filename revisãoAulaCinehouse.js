let catalogo = []; //variavel global - existe dentro das funções

//A função deve receber os paramentros com as informações necessarioas para criar um onjeto tipo Filme

function adicionar(codigo, nome, duracao, ano, atores, emCartaz){
return {codigo, nome, duracao, ano, atores, emCartaz};
};
catalogo.push(adicionar(1, 'Senhor dos Aneis', 3.00, 2001, "Ellija Hood", false));
console.log(catalogo);

/* a função deve receber como parametro o numero identificador do filme e 
fazer busca no array de catalogo e ao fim retornar o obj encontrado */

function buscarFilme(identificador){
    //usar FOR para percorrer cada elemento do array
    for( let i = 0; i< catalogo.length; i++){
        //condicional - se o codigo é igual ao identificador IF
        if(catalogo[i].codigo === identificador){
            achou = catalodp[i];
            break;
        }
        //se achar o elemento encerro o loop/laço com Break
    }
return achou;
}

//função para alterar se um filme esta em cartaz
function alterarStatusEmCartaz(identificador){
    //Encontrar o filme
    const filme = buscarFilme(identificador);
    
    //se o filme existir
    if (filme !== null) {
        //alterar a situação de cartaz se for verdadeiro alterar o status para falso e se for falso para verdadeiro
        //(verificar o resto na aula gravada)
    }
}