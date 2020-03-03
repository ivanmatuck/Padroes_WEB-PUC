"use strict";

$(document).ready(function () {

  $('#carregar').click(function () {
    $('#resultado').load('jquery8a.html');
    $.getJSON('produtos.json', function (obj) {
      for (let lp of obj['lista de produtos']) {
        var linha = $('<tr>');
        var preco = (new Number(lp['preço'])).toFixed(2).replace('.', ',');
        linha.append($('<td>' + lp['código'] + '</td>'));
        linha.append($('<td>' + lp['nome'] + '</td>'));
        linha.append($('<td>' + preco + '</td>'));
        $('#dados').append(linha);
      }
    });
    $.getScript('jquery8a.js', function(){
      alerta();
    })
  });
});