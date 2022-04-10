// lista de filmes - trabalhando arrays - Criando array de objetos 

const catalogo = [
    {
    codigo : 1 ,
    titulo : "Star Wars" ,
    duracao : 2.01 , 
    atores : ["Mark Hamill" , "Harrison Ford" , "Carrie Fisher"] ,
    anoDeLancamento : 1977 ,
    emCartaz : false 
} ,
{
    codigo : 2 ,
    titulo : "The Batman" ,
    duracao : 2.56 ,
    atores : ["Robert Pattinson" , "Paul Dano" , "Colin Farrel" , "Jonh Torturro"] , 
    anoDeLancamento : 2022 , 
    emCartaz : true
} , 
{
    codigo : 3 ,
    titulo : "The 40 year - Old Virgin" ,
    duracao : 1.56 ,
    atores : ["Steve Carrel" , "Seth Rogen" , "Paul Rudd"] , 
    anoDeLancamento : 2005 ,
    emCartaz : false
} ,
];
console.log (catalogo)
module.exports = catalogo;
// Array de objetos sempre usar doisPontos 
