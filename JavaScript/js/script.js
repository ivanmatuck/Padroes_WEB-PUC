/* function Pessoa(n,s) {
    this.nome = n;
    this.sobrenome = s;
};

var joao = new Pessoa ('João', ' Silva');
var maria = new Pessoa('Maria', 'Oliveira');

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

console.log(joao.nomeCompleto()); */

// JSON
/* var produtos =
{
    "listaDeProdutos": [
        {
            "código": 1,
            "nome": "Torradeira",
            "preço": 134.50
        },
        {
            "código": 2,
            "nome": "Sanduicheira",
            "preço": 120.30
        },
        {
            "código": 3,
            "nome": "Refrigerador",
            "preço": 1240.00
        }
    ]
};

console.log(produtos);

console.log(JSON.stringify(produtos)); */

// CLASSES - Syntatical Sugar

/* class Poligono {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    get area() {
        return this.largura*this.altura;
    }
}
const quadrado = new Poligono(10,15);

console.log(quadrado.area);
 */

 //NUMBER
/* 
 var notas = [10, 5, 13, -8, 3];
 var maiorNota = 0;
 for(let n of notas) {
     if(n > maiorNota)
     maiorNota = n;
 }

 console.log(maiorNota); */
/* 
 var titulo = document.querySelector('h1');
 titulo.style.border = "thin solid black";
 titulo.style.backgroundColor = "lightgray";
 titulo.style.padding = "5px 10px";
 titulo.style.fontFamily = "calibri, sans-serif";
 titulo.style.fontSize = "24pt";

 var novoParagrafo = document.createElement('p');
 novoParagrafo.setAttribute('id', 'novo');
 novoParagrafo.innerHTML = "Cheguei!!!";
 var body = document.querySelector('body');
 body.appendChild(novoParagrafo);

 var pp = document.querySelector('p');
 pp.remove(); */


 function carregaDados() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

    /* 
    readyState
    0 - requisição não foi iniciada
    1 - conexão com o servidor estabelecida
    2 - requisição foi recebida pelo servidor
    3 - requisição está sendo processada
    4 - resposta pronta

    status
    200 - resposta ok
    404 - página/url não encontrada
    */

    if(xhr.readyState==4 && xhr.status==200) {
        
        document.getElementById('dados').innerHTML = formata(xhr.responseText);
        }
    }

    xhr.open("GET", "produtos.json", true);
    xhr.send();
 }

 function formata(strDados) {
    var objDados = JSON.parse(strDados);
    var linhasTabela = '';
    for(lp of objDados['listaDeProdutos']) {
        var preco = 'R$' + (new Number (lp['preço'])).toFixed(2).replace('.', ',');
        linhasTabela +=   '<tr><td>' + lp['código'] + 
                '</td><td>' + lp['nome'] +
                '</td><td>' + preco + 
                '</td></tr>';
    }
    return linhasTabela;
 }